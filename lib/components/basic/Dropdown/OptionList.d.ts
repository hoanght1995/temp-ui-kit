import React from "react";
import type { Option, Value } from "./Dropdown";
interface OptionListProps {
    options: Option[];
    onClose?: () => void;
    onSelect?: (value: Value) => void;
    onSearchChange?: (value: string) => void;
    showSearch?: boolean;
    value?: Value;
}
declare const Wrapper: React.ForwardRefExoticComponent<OptionListProps & React.RefAttributes<unknown>>;
export default Wrapper;
