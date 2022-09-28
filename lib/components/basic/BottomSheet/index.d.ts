import React from "react";
import { ModalProps } from "../Modal";
export interface BottomSheetProps extends ModalProps {
    isModalOnWeb?: boolean;
}
declare const BottomSheetWrapper: React.ForwardRefExoticComponent<BottomSheetProps & React.RefAttributes<unknown>>;
export default BottomSheetWrapper;
