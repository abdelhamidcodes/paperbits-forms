export class TextareaModel {
    textareaId?: string;
    showLabel?: "before" | "after";
    labelText?: string;
    textareaName:string;
    placeholderText?: string;
    textValue?: string;
    colsCount?: number;
    rowsCount?: number;
    maxLength?: number;
    isRequired?: boolean;
    isReadonly?: boolean;
    isDisabled?: boolean;
}