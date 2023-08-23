import { HStack } from "@chakra-ui/react";

import { LinkNavBar } from "../Link";
import { Image } from "../Image";

export function Navbar() {
    return (
        <HStack
            bg={"#2F2F2F"}
            justify={"right"}
            py={5}
            spacing={20}
            position={"sticky"}
            top={0}
            zIndex={10000}
        >   
            <Image src={"/logo-branca.png"} alt={"Logo da Codejr"} width={80} height={80}/>
            <Image src={"/TechUnix.png"} alt={"Logo da Codejr"} width={179} height={31}/>
            <LinkNavBar href={"/"} text={"Página Inicial"} />
            <LinkNavBar href={""} text={"Login"} />
            <LinkNavBar href={""} text={"Contato"} />
            <LinkNavBar href={""} text={"Membros"} />
            <LinkNavBar href={""} text={"Gerenciamento"} />
        </HStack>
    )
}