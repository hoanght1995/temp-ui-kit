import { useState } from "react";

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);

  const focusProps = {
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  };

  return [focusProps, isFocused];
};

