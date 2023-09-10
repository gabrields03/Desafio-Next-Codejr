import { Link } from "@chakra-ui/react";
import NextLink from 'next/link';

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
            fontSize={"24px"}
            fontWeight={400}
            textDecoration={"none"}
        >
            {text}
        </Link>
    )
}