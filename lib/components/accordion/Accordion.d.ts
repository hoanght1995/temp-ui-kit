import React, { ReactElement } from "react";
export declare type AccordionProps = {
    title?: string;
    renderTitle?: () => ReactElement;
    content?: string;
    renderContent?: () => ReactElement;
    isOpen?: boolean;
};
declare const _default: React.MemoExoticComponent<(props: AccordionProps) => JSX.Element>;
export default _default;
