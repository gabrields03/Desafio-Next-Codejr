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

interface TitleSecondaryProps {
    text: string
}

export function TitleSecondary({ text }: TitleSecondaryProps) {
    return (
        <Heading
            as="h2"
            fontSize={"48px"}
            color={"fontColor"}
            fontWeight={400}
        >
            {text}
        </Heading>
    )
}