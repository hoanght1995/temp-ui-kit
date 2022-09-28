import { ReactElement } from "react";
export interface ScreenContainerProps {
    children?: ReactElement;
    backgroundColor?: string;
}
declare const ScreenContainer: (props: ScreenContainerProps) => JSX.Element;
export default ScreenContainer;
