# @rothzerg/nx-s3-remote-cache

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/nx-s3-remote-cache.svg)](https://www.npmjs.com/package/@rothzerg/nx-s3-remote-cache)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/nx-s3-remote-cache.svg)](https://www.npmjs.com/package/@rothzerg/nx-s3-remote-cache)

## Install

```
$ npm install --save-dev @rothzerg/nx-s3-remote-cache
```

# NxS3RemoteCache

Add your AWS Credentials into your `.env` file

```env
AWS_REGION=XXXXX
AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXX
```

Add `tasksRunnerOptions` in your `nx.json` file

```json
{
    "projects": {
        ...
    },
    "tasksRunnerOptions": {
        "default": {
            "runner": "@rothzerg/nx-s3-remote-cache",
            "options": {
                "bucketName": "NAME-OF-YOUR-STORAGE-BUCKET",
                "FolderName": "NAME-OF-YOUR-STORAGE-FOLDER-IN-THE-BUCKET",
                "cacheableOperations": ["build", "test", "e2e", "lint", "package", "prepare"]
            }
        }
    }
}

```

run a build and see if files end up in your cache storage bucket:

```
nx run-many --target=build --all
```
