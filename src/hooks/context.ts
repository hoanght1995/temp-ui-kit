import React from "react";
import { get, set } from "lodash";

export const useContextState = (initState = {}) => {
  const [values, setValues] = React.useState<any>(initState);

  const updateKey = React.useCallback((key: any, value: any) => {
    setValues((currentValues: any) => {
      if (currentValues[key] !== value) {
        return {
          ...currentValues,
          [key]: value,
        };
      }
      return currentValues;
    });
  }, []);

  const updatePath = React.useCallback((path: string, value: any) => {
    setValues((currentValues: any) => {
      if (get(currentValues, path) !== value) {
        const newValues = { ...currentValues };
        return set(newValues, path, value);
      }
      return currentValues;
    });
  }, []);

  return React.useMemo(() => ({
    values,
    updateKey,
    updatePath,
  }), [values]);
};
