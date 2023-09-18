import { Stack } from "@chakra-ui/react";

import { TitleIndex } from "@/components/Title";
import { TableMembros } from "@/components/Table";

export default function Membros(){
    return(
        <Stack
            as={"main"}
            align={"center"}
            spacing={20}
            p={20}
        >
            <TitleIndex text={"Membros"} />

            <TableMembros/>
            
        </Stack>
    )
}