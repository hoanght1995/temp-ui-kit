import React from "react";
import COLORS from "../../utils/colors";
import { BreakPointType } from "../../utils/types";
interface ThemeContextProps {
    screenSize?: BreakPointType;
    dimensions?: {
        width: number;
        height: number;
    };
    colors?: typeof COLORS;
}
export declare const ThemeContext: React.Context<{}>;
export declare const ThemeProvider: ({ children }: any) => JSX.Element;
export declare const useThemeContext: () => ThemeContextProps;
export {};
