import { Link } from "@chakra-ui/react";
import NextLink from 'next/link';

import { Image } from "../Image";
import { ReactNode } from "react";

interface LinkNavBarProps{
    href: string
    text: string
}

export function LinkNavBar({ href, text }:LinkNavBarProps){
    return(
        <Link
            as={NextLink}
            href={href}
            color={"#FFF"}
            fontSize={"22px"}
            fontWeight={400}
            textDecoration={"none"}
            _hover={{
                textDecoration:"none",
                color:"red"
            }}
        >
            {text}
        </Link>
    )
}

interface LinkImageProps{
    href: string
    src: string
    alt: string
    width: number
    height: number
    target: string
}

export function LinkImage({ href, src, alt, width, height, target }:LinkImageProps){
    return(
        <Link
            as={NextLink}
            href={href}
            textDecoration={"none"}
            target={target}
        >

            <Image src={src} alt={alt} width={width} height={height}/>

        </Link>
    )
}

interface LinkIconProps{
    href: string
    target: string
    children: ReactNode
}

export function LinkIcon({ href, target, children }:LinkIconProps){
    return(
        <Link
            as={NextLink}
            href={href}
            textDecoration={"none"}
            target={target}
            position={"absolute"}
            left={"-8px"}
        >
            {children}
        </Link>
    )
}