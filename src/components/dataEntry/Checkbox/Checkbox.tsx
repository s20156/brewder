import React, { useState } from "react";
import { Checkbox as AntCheckbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";


interface CheckboxProps {
    name: string;
    label: string;
    value: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({name, label, value}) => {
    const [ checked, setChecked ] = useState<boolean>(value);
    const handleChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.value);
    }
    return (
        <AntCheckbox onChange={handleChange} value={checked} name={name}>{label}</AntCheckbox>
    )
}