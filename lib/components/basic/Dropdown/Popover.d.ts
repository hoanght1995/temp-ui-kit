import React, { ReactElement } from "react";
interface PopoverProps {
    children: ReactElement;
    animation?: boolean;
    onClose?: () => void;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<unknown>>;
export default Popover;
