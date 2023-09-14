import { HStack, Stack } from "@chakra-ui/react";

import { Image } from "../Image";
import { TextBold, TextProducts } from "../Text";
import { LinkImage } from "../Link";
import { SectionSigaNos } from "../Section";

export function Footer() {
    return (
        <HStack
            p={12}
            spacing={300}
            justify={"center"}

        >
            <Stack
                spacing={0}
                alignItems={"center"}
            >
                <Image src={"/logo-branca.png"} alt={"Logo TechUnix"} width={120} height={120} />
                <Image src={"/TechUnix.png"} alt={"Logo TechUnix"} width={179} height={31} />


            </Stack>
            <Stack
                w={"40%"}
                spacing={5}
            >
                <Stack
                    spacing={1}
                >
                    <TextBold fontSize={"20px"} textAlign={"justify"} text={"TechUnix é uma empresa de venda de produtos de informática. As fotos contidas nesta página são meramente ilustrativas e podem variar de acordo com o fornecedor/lote do fabricante."} color={"red"} />
                    <TextProducts size={"16px"} textAlign={"justify"} text={"Rua José Lourenço Kelmer, UFJF,Instituto de Ciências Exatas, sala 3313"} color={"fontColor"} />
                </Stack>

                <Stack
                    spacing={0}
                >
                    <TextProducts size={"20px"} textAlign={"justify"} text={"contato@techunix.com.br"} color={"fontColor"} />
                    <TextProducts size={"20px"} textAlign={"justify"} text={"(32) 99965-3479"} color={"fontColor"} />
                </Stack>


            </Stack>

            <Stack
                spacing={5}
            >
                <SectionSigaNos size={"24px"} width={50} text={"Siga-nos"}/>
            </Stack>
        </HStack>
    )
}