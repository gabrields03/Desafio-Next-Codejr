import { Stack } from "@chakra-ui/react";

import { Image } from "../Image";
import { TextProducts } from "../Text";

interface CardProps{
    src: string;
    alt: string;
    text: string;
    color: string
}

export function Card({ src, alt, text, color }:CardProps){
    return(
        <Stack>
            <Image src={src} alt={alt} width={277} height={277}/>
            <TextProducts size={"18px"} textAlign={"left"} text={text} color={color}/>
            <TextProducts size={"28px"} textAlign={"left"} text={text} color={color}/>
            <TextProducts size={"12px"} textAlign={"left"} text={text} color={color}/>
        </Stack>
    )
}