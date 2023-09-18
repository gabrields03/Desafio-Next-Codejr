import { ButtonLogin } from "@/components/Button";
import { TableGerenciamentoMembros } from "@/components/Table";
import { TitleIndex } from "@/components/Title";
import { HStack, Stack } from "@chakra-ui/react";

export default function Gerenciamento(){
    return(
        <Stack
        as={"main"}
        p={20}
        spacing={20}
        >
            <HStack
            as={"section"}
            px={28}
            justify={"space-between"}
            >
                <TitleIndex text={"Gerenciamento dos membros"}/>
                <ButtonLogin textButton={"Adicionar"} href={"#"} color={"green"} colorHover={"#328030"} w={"10%"}/>
            </HStack>

            <Stack
            align={"center"}
            >
                <TableGerenciamentoMembros/>
            </Stack>
        </Stack>
    )
}