"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInstance = exports.showConfirmModal = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var Modal_1 = __importDefault(require("../basic/Modal"));
var RText_1 = __importDefault(require("../basic/RText"));
var instance;
var defaultData = {
    title: "",
    content: null,
    cancelButtonText: null,
    acceptButtonText: null,
    hideCancelButton: false,
    hideAcceptButton: false,
};
var ConfirmModal = (0, react_1.forwardRef)(function (_a, ref) {
    var animation = _a.animation;
    var modalRef = (0, react_1.useRef)();
    var _b = (0, react_1.useState)(defaultData), data = _b[0], setData = _b[1];
    var onOpen = (0, react_1.useCallback)(function (_a) {
        var _b;
        var _c = _a.title, title = _c === void 0 ? "" : _c, content = _a.content, cancelButtonText = _a.cancelButtonText, acceptButtonText = _a.acceptButtonText, _d = _a.hideCancelButton, hideCancelButton = _d === void 0 ? false : _d, _e = _a.hideAcceptButton, hideAcceptButton = _e === void 0 ? false : _e, onCancel = _a.onCancel, onAccept = _a.onAccept;
        setData({
            title: title,
            content: content,
            cancelButtonText: cancelButtonText,
            acceptButtonText: acceptButtonText,
            hideCancelButton: hideCancelButton,
            hideAcceptButton: hideAcceptButton,
            onCancel: onCancel,
            onAccept: onAccept
        });
        (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.open();
    }, []);
    var onClose = (0, react_1.useCallback)(function () {
        setData(defaultData);
    }, []);
    var onCancel = (0, react_1.useCallback)(function () {
        var _a;
        (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.close(function () {
            if (data.onCancel)
                data.onCancel();
        });
    }, [data]);
    var onAccept = (0, react_1.useCallback)(function () {
        var _a;
        (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.close(function () {
            if (data.onAccept)
                data.onAccept();
        });
    }, [data]);
    var content = (0, lodash_1.isString)(data.content) || (0, lodash_1.isNumber)(data.content) ? react_1.default.createElement(RText_1.default, null, data.content) : data.content;
    var actionButtons = (0, react_1.useMemo)(function () {
        var buttons = [];
        if (!data.hideCancelButton) {
            buttons.push({
                testID: "modal-cancel",
                title: data.cancelButtonText || "Cancel",
                type: "light",
                accessibilityRole: "button",
                onPress: onCancel,
            });
        }
        if (!data.hideAcceptButton) {
            buttons.push({
                testID: "modal-confirm",
                title: data.acceptButtonText || "Confirm",
                accessibilityRole: "button",
                onPress: onAccept,
            });
        }
        return buttons;
    }, [data, onAccept, onCancel]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        open: onOpen,
    }); });
    return (react_1.default.createElement(Modal_1.default, { ref: modalRef, actionButtons: actionButtons, onClose: onClose, title: data.title, animation: animation },
        react_1.default.createElement(react_1.default.Fragment, null, content)));
});
var setInstance = function (ref) {
    instance = ref;
};
exports.setInstance = setInstance;
var showConfirmModal = function (params) {
    if (instance) {
        return instance.open(params);
    }
    return null;
};
exports.showConfirmModal = showConfirmModal;
exports.default = ConfirmModal;
