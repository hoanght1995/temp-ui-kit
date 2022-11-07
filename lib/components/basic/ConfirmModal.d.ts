import React, { ReactElement } from "react";
export interface ConfirmModalProps {
    animation?: boolean;
}
interface Data {
    title?: string;
    content?: string | number | ReactElement | null;
    cancelButtonText?: string | null;
    acceptButtonText?: string | null;
    hideCancelButton?: boolean;
    hideAcceptButton?: boolean;
    onCancel?: () => void;
    onAccept?: () => void;
}
declare const ConfirmModal: React.ForwardRefExoticComponent<ConfirmModalProps & React.RefAttributes<unknown>>;
declare const setInstance: (ref: any) => void;
declare const showConfirmModal: (params: Data) => any;
export { showConfirmModal, setInstance };
export default ConfirmModal;
