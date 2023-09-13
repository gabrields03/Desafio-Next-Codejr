import { Box, HStack, Stack } from "@chakra-ui/react";

import { TitleIndex } from "../Title";
import { Card } from "../Card";

export function SectionIndex() {
    return (
        <Box
            bgImage="url('/capa.png')"
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            height={"65vh"}
        >
        </Box>
    )
}

export function SectionIndexProducts() {
    return (
        <Stack
            as={"section"}
            align={"center"}
            spacing={20}
        >

            <TitleIndex text={"Produtos em destaque"} />
            <HStack
                spacing={32}
            >
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
            </HStack>

            <HStack
                spacing={32}
            >
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
            </HStack>
            <HStack
                spacing={32}
            >
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
            </HStack>

            <HStack
                spacing={32}
            >
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
            </HStack>

        </Stack>
    )
}