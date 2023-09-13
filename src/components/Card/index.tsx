import { Stack } from "@chakra-ui/react";

import { Image } from "../Image";
import { TextBold, TextProducts } from "../Text";

interface CardProps {
    src: string;
    alt: string;
    text: string;
    text2: string;
}

export function Card({ src, alt, text, text2 }: CardProps) {
    return (
        <Stack

        >
            <Image src={src} alt={alt} width={350} height={300} />
            <Stack
                px={3}
            >
                <TextProducts size={"18px"} textAlign={"left"} text={text} color={"fontColor"} w={300} />
                <Stack
                    spacing={0}
                >
                    <TextBold text={text2} color={"green"} fontSize={"24px"} textAlign={"left"}/>
                    <TextProducts size={"12px"} textAlign={"left"} text={"no PIX com 15% de desconto"} color={"fontColor"} />
                </Stack>
            </Stack>
        </Stack>
    )
}