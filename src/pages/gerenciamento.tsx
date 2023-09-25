import { HStack, Stack } from "@chakra-ui/react";

import { Footer } from "@/components/Footer";
import { Create } from "@/components/Modals/Create";
import { Navbar } from "@/components/Navbar";
import { TableGerenciamentoMembros } from "@/components/Table";
import { TitleIndex } from "@/components/Title";

export default function Gerenciamento() {
    return (
        <>
            <Navbar />
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
                    <TitleIndex text={"Gerenciamento dos membros"} />
                    
                    <Create/>
                </HStack>
                <Stack
                    align={"center"}
                >
                    <TableGerenciamentoMembros />
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}