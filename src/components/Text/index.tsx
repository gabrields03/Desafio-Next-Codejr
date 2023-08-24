import { Text } from "@chakra-ui/react"

interface TextProductsProps{
    size: string;
    textAlign: any;
    text: string;
    color: string
}

export function TextProducts({ size, textAlign, text, color }:TextProductsProps) {
    return (
        <Text
            as="p"
            color={color}
            fontSize={size}
            fontWeight={400}
            textAlign={textAlign} 
        >

            {text}

        </Text>
    )
}