import React, { ReactElement } from "react";
import COLORS from "../../utils/colors";
import { BreakPointType } from "../../utils/types";
declare type Mode = "dark" | "light";
interface ThemeContextProps {
    screenSize?: BreakPointType;
    dimensions?: {
        width: number;
        height: number;
    };
    colors?: typeof COLORS;
    themeColor?: typeof COLORS.dark | typeof COLORS.light;
    setMode?: (value: Mode) => void;
}
export declare const ThemeContext: React.Context<{}>;
declare type ThemProviderProps = {
    children: ReactElement;
    defaultTheme?: Mode;
};
export declare const ThemeProvider: (props: ThemProviderProps) => JSX.Element;
export declare const useThemeContext: () => ThemeContextProps;
export {};
