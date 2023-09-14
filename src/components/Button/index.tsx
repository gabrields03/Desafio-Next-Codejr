import { Button } from "@chakra-ui/react";
import NextLink from 'next/link'

interface ButtonLoginProps{
    textButton: string
    href: string
    color: string
    colorHover: string
    w: string
}

export function ButtonLogin({ textButton, href, color, colorHover, w }: ButtonLoginProps){
    return(
        <Button
        as={NextLink}
        href={href}
        bg={color}
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        py={6}
        w={w}
        _hover={{
            bg:colorHover
        }}
        >
            {textButton}
        </Button>
    )
}