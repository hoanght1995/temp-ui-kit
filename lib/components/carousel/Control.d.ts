import React from "react";
export declare enum CardinalDirections {
    Previous = 0,
    Next = 1
}
export interface ControlProps {
    handleControlClick: (direction: CardinalDirections) => void;
}
declare function Control({ handleControlClick }: ControlProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Control>;
export default _default;
