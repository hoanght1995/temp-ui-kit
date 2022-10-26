import { ViewProps } from "react-native";
export declare type CardProps = {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
} & ViewProps;
declare const Card: {
    (props: CardProps): JSX.Element;
    displayName: string;
};
export default Card;
