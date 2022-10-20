import { ProgressBarProps } from "./ProgressBar";
declare type InnerCircleType = {
    radius: number;
} & Pick<ProgressBarProps, "innerBackgroundColor">;
declare const InnerCircle: (props: InnerCircleType) => JSX.Element;
export default InnerCircle;
