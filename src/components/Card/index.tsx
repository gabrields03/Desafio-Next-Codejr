import { HStack, Stack } from "@chakra-ui/react";

import { Image } from "../Image";
import { TextBold, TextProducts } from "../Text";
import { InputIndex } from "../Form";
import { TitleIndex } from "../Title";
import { ButtonLogin } from "../Button";
import { ReactNode } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { LinkIcon } from "../Link";

interface CardProps {
    src: string;
    alt: string;
    text: string;
    text2: string;
}

export function Card({ src, alt, text, text2 }: CardProps) {
    return (
        <Stack

        >
            <Image src={src} alt={alt} width={350} height={300} />
            <Stack
                px={3}
            >
                <TextProducts size={"18px"} textAlign={"left"} text={text} color={"fontColor"} w={300} />
                <Stack
                    spacing={0}
                >
                    <TextBold text={text2} color={"green"} fontSize={"24px"} textAlign={"left"} />
                    <TextProducts size={"12px"} textAlign={"left"} text={"no PIX com 15% de desconto"} color={"fontColor"} />
                </Stack>
            </Stack>
        </Stack>
    )
}

export function CardLogin() {
    return (
        <Stack
            as={"section"}
            align={"center"}
        >

            <Stack

                align={"center"}
                px={36}
                py={32}
                bg={"blue"}
                width={"35%"}
                spacing={20}
                borderRadius={10}
                boxShadow={"3px 3px 10px #00000060"}
            >

                <HStack
                    w={"100%"}
                    align={"center"}
                    spacing={32}
                >
                    <LinkIcon href={"/"} target={"_self"}>
                    <ArrowBackIcon boxSize={8} color={"fontColor"}/>
                    </LinkIcon>
                    
                    <TitleIndex text={"Login"}/>
                </HStack>
                <Stack
                    align={"center"}
                    width={"100%"}
                    spacing={16}
                >

                    <Stack
                        align={"center"}
                        width={"100%"}
                    >
                        <InputIndex label={"Usuário"} type={"text"} w={"100%"} placeholder={""} />
                        <InputIndex label={"Senha"} type={"password"} w={"100%"} placeholder={""} />
                    </Stack>

                    <Stack
                        align={"center"}
                        width={"100%"}
                        spacing={10}
                    >
                        <Stack
                            align={"center"}
                            width={"100%"}
                        >
                            <ButtonLogin textButton={"Entrar"} href={"/gerenciamento"} color={"#1EB01B"} colorHover={"#328030"} w={"100%"} />
                            <TextProducts size={"12px"} textAlign={"left"} text={"Esqueci minha senha"} color={"fontColor"} />
                        </Stack>

                        <Stack
                            align={"center"}
                            width={"100%"}
                        >
                            <TextProducts size={"12px"} textAlign={"left"} text={"Novo por aqui?"} color={"fontColor"} />
                            <ButtonLogin textButton={"Cadastre-se"} href={"#"} color={"#AB1616"} colorHover={"#9F1116"} w={"100%"} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

interface CardContatoProps{
    text: string
    text1: string
    children: ReactNode
}

export function CardContato({ text, text1, children }:CardContatoProps){
    return(
        <Stack
            as={"section"}
            p={10}
            w={"100%"}
            bg={"red"}
            borderRadius={10}
        >
            
            <HStack>
                {children}
                <TextBold text={text} color={"black"} fontSize={"24px"}/>
            </HStack>
            <TextProducts size={"20px"} textAlign={"justify"} text={text1} color={"black"}/>
        </Stack>
    )
}