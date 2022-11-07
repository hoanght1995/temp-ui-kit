"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../../utils");
var DashedLine_1 = __importDefault(require("../basic/DashedLine"));
var minHeight;
(function (minHeight) {
    minHeight[minHeight["sm"] = 64] = "sm";
    minHeight[minHeight["lg"] = 96] = "lg";
})(minHeight || (minHeight = {}));
var pContent;
(function (pContent) {
    pContent[pContent["sm"] = 8] = "sm";
    pContent[pContent["lg"] = 8] = "lg";
})(pContent || (pContent = {}));
var buttonW;
(function (buttonW) {
    buttonW[buttonW["sm"] = 84] = "sm";
    buttonW[buttonW["lg"] = 96] = "lg";
})(buttonW || (buttonW = {}));
var VoucherContainer = function (props) {
    var children = props.children, _a = props.backgroundColor, backgroundColor = _a === void 0 ? "white" : _a, _b = props.size, size = _b === void 0 ? "sm" : _b, btnTitle = props.btnTitle, onPress = props.onPress, _c = props.style, style = _c === void 0 ? {} : _c, disabled = props.disabled, _d = props.btnStyle, btnStyle = _d === void 0 ? {} : _d, _e = props.btnTitleStyle, btnTitleStyle = _e === void 0 ? {} : _e, restProps = __rest(props, ["children", "backgroundColor", "size", "btnTitle", "onPress", "style", "disabled", "btnStyle", "btnTitleStyle"]);
    var sizeStyle = react_1.default.useMemo(function () {
        return {
            content: {
                backgroundColor: backgroundColor,
                padding: pContent[size],
                minHeight: minHeight[size],
            },
            button: __assign({ width: buttonW[size], padding: pContent[size], backgroundColor: backgroundColor }, btnStyle),
            hr: {
                marginVertical: pContent[size],
                backgroundColor: backgroundColor,
            },
        };
    }, [backgroundColor, btnStyle, size]);
    var disableVoucher = react_1.default.useMemo(function () {
        if (!disabled)
            return null;
        return react_1.default.createElement(react_native_1.View, { style: styles.disabledView });
    }, [disabled]);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.container, style], pointerEvents: disabled ? "none" : "auto" }, restProps),
        react_1.default.createElement(react_native_1.View, { style: [styles.content, sizeStyle.content] },
            disableVoucher,
            children),
        react_1.default.createElement(DashedLine_1.default, { isHorizontal: false, color: utils_1.COLORS.gray300, gap: 1.25, length: 5, thickness: 0.75, style: sizeStyle.hr }),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, sizeStyle.button], onPress: onPress },
            disableVoucher,
            react_1.default.createElement(react_native_1.Text, { style: btnTitleStyle }, btnTitle))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 4,
    },
    content: {
        flexGrow: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        shadowColor: utils_1.COLORS.black,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 4,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        shadowColor: utils_1.COLORS.black,
        shadowRadius: 8,
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.05,
        elevation: 4,
    },
    disabledView: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { zIndex: 2, backgroundColor: utils_1.COLORS.white, opacity: 0.5, borderRadius: 8 }),
});
exports.default = VoucherContainer;
