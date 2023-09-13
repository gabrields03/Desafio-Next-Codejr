import { Text } from "@chakra-ui/react"

interface TextProductsProps {
    size: string
    textAlign: any
    text: string
    color: string
    w?: number
}

export function TextProducts({ size, textAlign, text, color, w }: TextProductsProps) {
    return (
        <Text
            as="p"
            color={color}
            fontSize={size}
            fontWeight={400}
            textAlign={textAlign}
            w={w}
        >

            {text}

        </Text>
    )
}