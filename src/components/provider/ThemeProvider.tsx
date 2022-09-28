import React from "react";
import { Dimensions } from "react-native";
// import { throttle } from "lodash";
import { getScreenSize } from "utils/screen-size";
import { useRefState } from "hooks/useRefState";
import COLORS from "constants/colors";
import { BreakPointType } from "constants/types";

interface ThemeContextProps {
  screenSize?: BreakPointType,
  dimensions?: { width: number, height: number },
  colors?: typeof COLORS,
}

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }: any) => {
  // const [breakpoint, getCurrentBreakpoint, setBreakpoint] = useRefState(getScreenSize(Dimensions.get("window").width));
  const [breakpoint] = useRefState(getScreenSize(Dimensions.get("window").width));

  // const updateBreakpoint = throttle((e) => {
  //   const newBreakpoint = getScreenSize(e.window.width);
  //   if (newBreakpoint !== getCurrentBreakpoint()) {
  //     setBreakpoint(newBreakpoint);
  //   }
  // }, 300);
  //
  // React.useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", updateBreakpoint);
  //   return () => {
  //     subscription?.remove();
  //   };
  // }, []);

  const contextValue = React.useMemo(() => ({
    screenSize: breakpoint,
    colors: COLORS,
    dimensions: Dimensions.get("window"),
  }), [breakpoint]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const values: ThemeContextProps = React.useContext(ThemeContext);
  return values;
};
