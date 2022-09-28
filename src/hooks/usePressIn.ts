import { useState } from "react";

export const usePressIn = () => {
  const [isPressIn, setIsPressIn] = useState(false);

  const pressInProps = {
    onPressIn: () => {
      setIsPressIn(true);
    },
    onPressOut: () => {
      setIsPressIn(false);
    }
  };

  return [pressInProps, isPressIn];
};

