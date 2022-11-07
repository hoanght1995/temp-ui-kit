import { ProgressBarProps } from "./ProgressBar";
declare type CircularProgressType = Pick<ProgressBarProps, "size" | "percent" | "innerBackgroundColor">;
declare const CircularProgressBar: (props: CircularProgressType) => JSX.Element;
export default CircularProgressBar;
