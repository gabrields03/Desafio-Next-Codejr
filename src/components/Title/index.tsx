import { Heading } from "@chakra-ui/react"

interface TitleIndexProps{
    color: string
    text: string
    w?: string
}

export function TitleIndex({ color, text, w }:TitleIndexProps) {
    return (
        <Heading
            as="h1"
            fontSize={"64px"}
            color={color}
            fontWeight={400}
            w={w}
            textTransform={"uppercase"}
        >
            {text}
        </Heading>
    )
}