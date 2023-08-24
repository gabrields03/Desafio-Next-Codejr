import { HStack, Stack, Text } from "@chakra-ui/react";
import { Image } from "../Image";

export function Footer(){
    return(
        <Stack
            p={10}
            align={"center"}
            bg={"#ECE9EE"}
        >
            <HStack

            >
                <Image src={"/logo-branca.png"} alt={"Logo TechUnix"} width={80} height={80}/>
                <Image src={"/TechUnix.png"} alt={"Logo TechUnix"} width={179} height={31}/>


            </HStack>
            <Text
                as={"p"}
                color={"#343333"}
                fontSize={"16px"}
                fontWeight={400}
            >
                TechUnix é uma empresa de venda de produtos de informática. As fotos contidas nesta página são meramente ilustrativas e podem variar de acordo com o fornecedor/lote do fabricante.
            </Text>
        </Stack>
    )
}