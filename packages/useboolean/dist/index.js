Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var useBoolean = function (initial) {
    if (initial === void 0) { initial = false; }
    var _a = react.useState(initial), value = _a[0], setValue = _a[1];
    var updateValue = react.useRef({
        set: function (value) { return setValue(Boolean(value)); },
        toggle: function () { return setValue(function (value) { return !value; }); },
        true: function () { return setValue(true); },
        false: function () { return setValue(false); },
    });
    return [value, updateValue.current];
};

exports.useBoolean = useBoolean;
//# sourceMappingURL=index.js.map
