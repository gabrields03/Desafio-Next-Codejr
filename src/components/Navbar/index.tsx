import { HStack } from "@chakra-ui/react";
import { LinkImage, LinkNavBar } from "../Link";

export function Navbar() {
    return (

        <HStack
            bg={"#2F2F2F"}
            justify={"center"}
            py={1}
            spacing={[0, 0, 0, 0, 0, 10, 50, 800]}
            position={"sticky"}
            top={0}
            zIndex={10000}
            boxShadow={"0px 3px 10px #00000060"}
        >
            <HStack
                spacing={0}
                visibility={["collapse", "collapse", "collapse", "collapse", "collapse", "visible", "visible", "visible",]}
            >
                <LinkImage href={"/"} src={"/logo-branca.png"} alt={"Logo TechUnix"} width={80} height={80} target={"_self"} />
                <LinkImage href={"/"} src={"/TechUnix.png"} alt={"Logo TechUnix"} width={179} height={31} target={"_self"} />
            </HStack>

            <HStack
                spacing={[5, 5, 5, 5, 5, 50, 50, 50]}
                justify={"right"}
                
            >
                <LinkNavBar href={"./"} text={"Página Inicial"} />
                <LinkNavBar href={"/contato"} text={"Contato"} />
                <LinkNavBar href={"/membros"} text={"Membros"} />
                <LinkNavBar href={"/gerenciamento"} text={"Gerenciamento"} />
                <LinkNavBar href={"/login"} text={"Login"} />
            </HStack>

            
        </HStack>
    )
}