import { HStack } from "@chakra-ui/react";

import { LinkImage, LinkNavBar } from "../Link";
import { Image } from "../Image";

export function Navbar() {
    return (
        
        <HStack
            bg={"#2F2F2F"}
            justify={"center"}
            py={1}
            spacing={800}
            position={"sticky"}
            top={0}
            zIndex={10000}
        >   
            <HStack
            spacing={0}
            >
                <LinkImage href={"/"} src={"/logo-branca.png"} alt={"Logo TechUnix"} width={80} height={80} target={"_self"}/>
                <LinkImage href={"/"} src={"/TechUnix.png"} alt={"Logo TechUnix"} width={179} height={31} target={"_self"}/>
            </HStack>
            
            <HStack
            spacing={50}
            justify={"right"}
            >
                <LinkNavBar href={"./"} text={"Página Inicial"} />
                <LinkNavBar href={""} text={"Login"} />
                <LinkNavBar href={""} text={"Contato"} />
                <LinkNavBar href={""} text={"Membros"} />
                <LinkNavBar href={""} text={"Gerenciamento"} />
            </HStack>
        </HStack>
    )
}