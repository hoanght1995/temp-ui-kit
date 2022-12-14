"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("@react-spring/native");
var utils_1 = require("../../utils");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
function Indicator(props) {
    var indicatorQuantity = props.indicatorQuantity, activeIndex = props.activeIndex, onChangeIndicator = props.onChangeIndicator;
    var dots = (0, native_1.useSprings)(indicatorQuantity, Array.from(Array(indicatorQuantity).keys()).map(function (item) { return ({
        backgroundColor: activeIndex === item ? utils_1.COLORS.purple : utils_1.COLORS.violet200,
    }); }));
    return (react_1.default.createElement(react_native_1.View, { style: styles.indicator }, dots.map(function (props, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, onPress: function () { return onChangeIndicator(index); } },
        react_1.default.createElement(native_1.animated.View, { style: [props, styles.dot], key: index }))); })));
}
var styles = react_native_1.StyleSheet.create({
    indicator: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
});
exports.default = Indicator;
