import React, { ReactElement } from "react";
import { StyleProp } from "react-native";
import { ButtonProps } from "./Button";
export interface ModalProps {
    testID?: string;
    title?: string;
    onClose?: () => void;
    children?: ReactElement;
    headerButtons?: {
        icon: string;
        onPress?: () => void;
    }[];
    actionButtons?: ButtonProps[];
    onBack?: () => void;
    backDropClosable?: boolean;
    closable?: boolean;
    width?: number;
    animation?: boolean;
    bodyStyle?: StyleProp<any>;
    showTopHandler?: boolean;
    scroll?: boolean;
    height?: number | "100%";
}
declare const ModalComponent: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<unknown>>;
export default ModalComponent;
