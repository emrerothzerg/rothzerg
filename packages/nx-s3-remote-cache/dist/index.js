"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = __importDefault(require("@nrwl/workspace/tasks-runners/default"));
const client_s3_1 = require("@aws-sdk/client-s3");
const credential_provider_ini_1 = require("@aws-sdk/credential-provider-ini");
const credential_provider_env_1 = require("@aws-sdk/credential-provider-env");
const path_1 = require("path");
const fs_1 = require("fs");
const mkdirp_1 = __importDefault(require("mkdirp"));
const get_stream_1 = __importDefault(require("get-stream"));
const property_provider_1 = require("@aws-sdk/property-provider");
function runner(tasks, options, context) {
    if (!options.bucketName) {
        throw new Error('Please update nx.json to include a bucketName');
    }
    if (!options.folderName) {
        throw new Error('Please update nx.json to include a folderName');
    }
    const areCredentialsInEnv = Boolean(process.env[credential_provider_env_1.ENV_KEY] && process.env[credential_provider_env_1.ENV_SECRET]);
    console.log('>>>> Credentials from env?', areCredentialsInEnv);
    const s3 = new client_s3_1.S3({
        region: options.region || process.env.AWS_REGION || 'us-east-1',
        credentials: areCredentialsInEnv
            ? (0, credential_provider_env_1.fromEnv)()
            : (0, credential_provider_ini_1.fromIni)({
                profile: options.profile,
            }),
    });
    process.on('unhandledRejection', () => { });
    process.on('rejectionHandled', () => { });
    async function retrieve(hash, cacheDirectory) {
        var _a;
        try {
            const commitFile = `${hash}.commit`;
            try {
                await s3.headObject({
                    Bucket: options.bucketName,
                    Key: `${options.folderName}/${hash}.commit`,
                });
            }
            catch (e) {
                if (e.name === 'NotFound') {
                    return false;
                }
                else if (e instanceof property_provider_1.ProviderError) {
                    return false;
                }
                else {
                    throw e;
                }
            }
            const filesOutput = await s3.listObjects({
                Bucket: options.bucketName,
                Prefix: `${options.folderName}/${hash}/`,
            });
            const files = ((_a = filesOutput.Contents) === null || _a === void 0 ? void 0 : _a.map((f) => f.Key)) || [];
            await Promise.all(files.map((f) => {
                if (f) {
                    return download(f);
                }
                return null;
            }));
            await download(commitFile); // commit file after we're sure all content is downloaded
            console.log(`retrieved ${files.length + 1} files from cache s3://${options.bucketName}/${options.folderName}/${hash}`);
            return true;
        }
        catch (e) {
            console.log(e);
            console.log(`WARNING: failed to download cache from ${options.bucketName}: ${e.message}`);
            return false;
        }
        async function download(fileName) {
            const destination = (0, path_1.join)(cacheDirectory, fileName);
            await (0, mkdirp_1.default)((0, path_1.dirname)(destination));
            const fileOutput = await s3.getObject({
                Bucket: options.bucketName,
                Key: `${options.folderName}/${fileName}`,
            });
            const fileStream = fileOutput.Body;
            let contentBuffer = await get_stream_1.default.buffer(fileStream);
            if (fileOutput.Body) {
                return fs_1.promises.writeFile(destination, contentBuffer);
            }
        }
    }
    async function store(hash, cacheDirectory) {
        const tasks = [];
        try {
            await uploadDirectory((0, path_1.join)(cacheDirectory, hash));
            await Promise.all(tasks);
            // commit file once we're sure all content is uploaded
            await s3.putObject({
                Bucket: options.bucketName,
                Key: `${options.folderName}/${hash}.commit`,
                Body: (0, fs_1.readFileSync)((0, path_1.join)(cacheDirectory, `${hash}.commit`)),
            });
            console.log(`stored ${tasks.length + 1} files in cache s3://${options.bucketName}/${options.folderName}/${hash}`);
            return true;
        }
        catch (e) {
            console.log(`WARNING: failed to upload cache to ${options.bucketName}: ${e.message}`);
            return false;
        }
        async function uploadDirectory(dir) {
            for (const entry of await fs_1.promises.readdir(dir)) {
                const full = (0, path_1.join)(dir, entry);
                const stats = await fs_1.promises.stat(full);
                if (stats.isDirectory()) {
                    await uploadDirectory(full);
                }
                else if (stats.isFile()) {
                    const destination = (0, path_1.relative)(cacheDirectory, full);
                    tasks.push(s3.putObject({
                        Bucket: options.bucketName,
                        Key: `${options.folderName}/${destination}`,
                        Body: (0, fs_1.readFileSync)(full),
                    }));
                }
            }
        }
    }
    return (0, default_1.default)(tasks, { ...options, remoteCache: { retrieve, store } }, context);
}
exports.default = runner;
