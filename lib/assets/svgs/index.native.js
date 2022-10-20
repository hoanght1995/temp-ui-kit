"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconList = void 0;
var btc_svg_1 = __importDefault(require("./btc.svg"));
var empty_box_svg_1 = __importDefault(require("./empty-box.svg"));
var check_white_svg_1 = __importDefault(require("./check-white.svg"));
var check_svg_1 = __importDefault(require("./check.svg"));
var chevron_left_white_svg_1 = __importDefault(require("./chevron-left-white.svg"));
var chevron_left_svg_1 = __importDefault(require("./chevron-left.svg"));
var chevron_right_white_svg_1 = __importDefault(require("./chevron-right-white.svg"));
var chevron_right_svg_1 = __importDefault(require("./chevron-right.svg"));
var circle_info_svg_1 = __importDefault(require("./circle-info.svg"));
var close_svg_1 = __importDefault(require("./close.svg"));
var delete_svg_1 = __importDefault(require("./delete.svg"));
var double_arrow_svg_1 = __importDefault(require("./double-arrow.svg"));
var favorite_svg_1 = __importDefault(require("./favorite.svg"));
var schedule_svg_1 = __importDefault(require("./schedule.svg"));
var search_svg_1 = __importDefault(require("./search.svg"));
var Svgs = {
    "btc": btc_svg_1.default,
    "empty-box": empty_box_svg_1.default,
    "check-white": check_white_svg_1.default,
    "check": check_svg_1.default,
    "chevron-left-white": chevron_left_white_svg_1.default,
    "chevron-left": chevron_left_svg_1.default,
    "chevron-right-white": chevron_right_white_svg_1.default,
    "chevron-right": chevron_right_svg_1.default,
    "circle-info": circle_info_svg_1.default,
    "close": close_svg_1.default,
    "delete": delete_svg_1.default,
    "double-arrow": double_arrow_svg_1.default,
    "favorite": favorite_svg_1.default,
    "schedule": schedule_svg_1.default,
    "search": search_svg_1.default,
};
exports.iconList = Object.keys(Svgs);
exports.default = Svgs;
