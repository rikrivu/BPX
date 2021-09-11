export interface RadioButtonOption {
    name: string;
    id: string;
}

export interface RadioButtonComponentProps {
    options: RadioButtonOption[];
    handleRadioButtonToggle(event: any): void;
    selected: string;
}