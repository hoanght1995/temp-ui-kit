"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconList = void 0;
var btc_svg_1 = require("./btc.svg");
var check_white_svg_1 = require("./check-white.svg");
var chevron_left_white_svg_1 = require("./chevron-left-white.svg");
var chevron_right_white_svg_1 = require("./chevron-right-white.svg");
var delete_svg_1 = require("./delete.svg");
var double_arrow_svg_1 = require("./double-arrow.svg");
var favorite_svg_1 = require("./favorite.svg");
var schedule_svg_1 = require("./schedule.svg");
var components_1 = require("./components");
var Svgs = {
    "btc": btc_svg_1.ReactComponent,
    "empty-box": components_1.IcEmptyBox,
    "check-white": check_white_svg_1.ReactComponent,
    "check": components_1.IcCheck,
    "chevron-left-white": chevron_left_white_svg_1.ReactComponent,
    "chevron-left": components_1.IcChevronLeft,
    "chevron-right-white": chevron_right_white_svg_1.ReactComponent,
    "chevron-right": components_1.IcChevronRight,
    "circle-info": components_1.IcCircleInfo,
    "close": components_1.IcClose,
    "search": components_1.ISearch,
    "delete": delete_svg_1.ReactComponent,
    "double-arrow": double_arrow_svg_1.ReactComponent,
    "favorite": favorite_svg_1.ReactComponent,
    "schedule": schedule_svg_1.ReactComponent,
};
exports.iconList = Object.keys(Svgs);
exports.default = Svgs;
