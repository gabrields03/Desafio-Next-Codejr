import { Stack } from "@chakra-ui/react";

import { TitleIndex } from "@/components/Title";
import { TableMembros } from "@/components/Table";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export default function Membros() {

    return (
        <>
            <Navbar />
            <Stack
                as={"main"}
                align={"center"}
                spacing={20}
                p={20}
            >
                <TitleIndex text={"Membros"} />
                <TableMembros />

            </Stack>
            <Footer />
        </>
    )
}