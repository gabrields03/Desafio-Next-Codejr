import { Button } from "@chakra-ui/react";
import NextLink from 'next/link'

interface ButtonLoginProps{
    textButton: string
    href: string
    color: string
    colorHover: string
}

export function ButtonLogin({ textButton, href, color, colorHover }: ButtonLoginProps){
    return(
        <Button
        as={NextLink}
        href={href}
        bg={color}
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        py={6}
        w={"100%"}
        _hover={{
            bg:colorHover
        }}
        >
            {textButton}
        </Button>
    )
}