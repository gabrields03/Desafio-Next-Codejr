import { Box, HStack, Stack } from "@chakra-ui/react";

import { TitleIndex } from "../Title";
import { Card } from "../Card";
import { Image } from "../Image";
import { LinkImage } from "../Link";
import { TextProducts } from "../Text";

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
                spacing={24}
            >
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
            </HStack>

            <HStack
                spacing={24}
            >
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
            </HStack>
            <HStack
                spacing={24}
            >
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
            </HStack>

            <HStack
                spacing={24}
            >
                <Card src={"/mouse.png"} alt={"Mouse"} text={"Mouse Raptor Series OM-801, Wireless, Preto"} text2={"R$ 59,90"} />
                <Card src={"/monitor.png"} alt={"Monitor"} text={"Monitor Gamer, 27 PoL, 165Hz, 1ms, HDMI"} text2={"R$ 1.499,90"} />
                <Card src={"/computador.png"} alt={"Computador"} text={"Computador Gamer, Intel i7-13400, GeForce RTX 3060"} text2={"R$ 6.500,90"} />
                <Card src={"/headseat.png"} alt={"Headseat"} text={"Fone de ouvido Tune 720BT, Wireless, Branco"} text2={"R$ 260,90"} />
            </HStack>

        </Stack>
    )
}

export function SectionIndexPromotionProducts(){
    return(
        <Stack
            as={"section"}
            spacing={20}
            align={"center"}
            bg={"black"}
            p={20}
        >

            <TitleIndex text={"Produtos em promoção"}/>

            <HStack
            spacing={10}
            >
                <Image src={"/computador-promo.png"} alt={"Computador"} width={350} height={500}/>
                <Image src={"/mouse-promo.png"} alt={"Mouse"} width={350} height={500}/>
                <Image src={"/monitor-promo.png"} alt={"Monitor"} width={350} height={500}/>
            </HStack>
        </Stack>
    )
}

interface SectionSigaNosProps{
    size: string
    width: number
    text: string
}

export function SectionSigaNos({ size, width, text }:SectionSigaNosProps){
    return(
        <>
        <TextProducts size={size} textAlign={"center"} text={text} color={"fontColor"} />

                <HStack>
                    <LinkImage href={"https://www.instagram.com"} src={"/instagram.png"} alt={"Logo do instagram"} width={width} height={width} target={"_blank"} />
                    <LinkImage href={"https://www.facebook.com"} src={"/facebook-logo.png"} alt={"Logo do facebook"} width={width} height={width} target={"_blank"} />
                    <LinkImage href={"https://twitter.com"} src={"/twitter.png"} alt={"Logo do twitter"} width={width} height={width} target={"_blank"} />
                    <LinkImage href={"https://www.youtube.com"} src={"/youtube.png"} alt={"Logo do youtube"} width={width} height={width} target={"_blank"} />
                </HStack>
        </>
    )
}