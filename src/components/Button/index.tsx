import { Button } from "@chakra-ui/react";
import NextLink from 'next/link'

interface ButtonLoginProps{
    textButton: string
    href: string
    color: string
    colorHover: string
    w: any
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

interface ButtonCreateProps{
    onClick: any
}

export function ButtonCreate( {onClick}:ButtonCreateProps ){
    return(
        <Button
        as={NextLink}
        href={"#"}
        bg={"green"}
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        py={6}
        w={"10%"}
        _hover={{
            bg: "#328030"
        }}
        onClick={onClick}
        >
            Adicionar
        </Button>
    )
}