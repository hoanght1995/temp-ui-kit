import { useRef, useState } from "react";

export const useRefState = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const valueRef = useRef(initialValue);

  const valueInRender = value;
  const getLatestValueToUseInFunction = () => valueRef.current;
  const setValueRef = (newValue: any) => {
    valueRef.current = newValue;
    setValue(newValue);
  };

  return [
    valueInRender,
    getLatestValueToUseInFunction,
    setValueRef,
  ];
};
