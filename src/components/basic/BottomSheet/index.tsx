import React, { forwardRef } from "react";

import { isWeb } from "utils/platform";
import BottomSheet from "./BottomSheet";
import Modal from "../Modal";

import { ModalProps } from "../Modal";

export interface BottomSheetProps extends ModalProps {
  isModalOnWeb?: boolean;
}

const modalBodyStyle = {
  padding: 0
};

const BottomSheetWrapper = forwardRef(({ isModalOnWeb = true, ...props }: BottomSheetProps, ref) => {
  return isWeb && isModalOnWeb ? (
    <Modal
      ref={ref}
      {...props}
      bodyStyle={[modalBodyStyle, props.bodyStyle]}
    />
  ) : (
    <BottomSheet
      ref={ref}
      {...props}
    />
  );
});

BottomSheetWrapper.displayName = "BottomSheetWrapper";
export default BottomSheetWrapper;
