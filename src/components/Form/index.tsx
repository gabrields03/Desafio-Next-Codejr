import { FormControl, FormLabel, Input, Textarea, border } from "@chakra-ui/react";

interface InputIndexProps{
    label: string
    type: string
    w: string
    placeholder: string
}

export function InputIndex({ label, type, w, placeholder }:InputIndexProps) {
    return (
        <FormControl
            w={w}
            isRequired
        >
            <FormLabel color={"fontColor"}  fontSize={18}>{label}</FormLabel>
            <Input 
            type={type} 
            placeholder={placeholder} 
            height={"3.5rem"} 
            color={"fontColor"} 
            borderColor={"fontColor"}
            focusBorderColor={"fontColor"}
            />
        </FormControl>
    )
}

interface InputTextAreaProps{
    label: string
    w: string
}

export function InputTextArea({ label, w }:InputTextAreaProps) {
    return (
        <FormControl
            w={w}
            isRequired
        >
            <FormLabel color={"fontColor"} fontSize={18}>{label}</FormLabel>
            <Textarea 
            height={"25rem"} 
            color={"fontColor"} 
            borderColor={"fontColor"}
            focusBorderColor={"fontColor"}

            />
        </FormControl>
    )
}