import { Box, Stack } from "@chakra-ui/react";
import { TextProducts } from "../Text";
import { TitleIndex } from "../Title";

export function SectionIndex() {
    return (
        <Box
            bgImage="url('/capa.png')"
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            p={12}
        >       

            <Stack>
                <TitleIndex color={"#FFF"} text={"Super"}/>
            </Stack>

        </Box>
    )
}