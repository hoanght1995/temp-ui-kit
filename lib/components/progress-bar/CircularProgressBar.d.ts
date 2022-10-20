import { ProgressBarProps } from "./ProgressBar";
export declare const strokeColor: string;
declare type CircularProgressType = Pick<ProgressBarProps, "size" | "percent" | "innerBackgroundColor">;
declare const CircularProgressBar: (props: CircularProgressType) => JSX.Element;
export default CircularProgressBar;
