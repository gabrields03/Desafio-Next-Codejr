import { Heading, Stack } from "@chakra-ui/react"

interface TitleIndexProps {
    text: string
}

export function TitleIndex({ text }: TitleIndexProps) {
    return (
        <Heading
            as="h1"
            fontSize={"64px"}
            color={"fontColor"}
            fontWeight={400}
        >
            {text}
        </Heading>
    )
}