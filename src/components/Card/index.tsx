import { Stack } from "@chakra-ui/react";

import { Image } from "../Image";
import { TextBold, TextProducts } from "../Text";
import { InputIndex } from "../Form";
import { TitleIndex } from "../Title";
import { ButtonLogin } from "../Button";

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

                <TitleIndex text={"Login"} />
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

export function CardContato(){
    return(
        <Stack
            as={"section"}
            p={10}
            w={"100%"}
            bg={"red"}
            borderRadius={10}
        >
            <TextBold text={"Telefone de contato"} color={"black"} fontSize={"24px"}/>
        </Stack>
    )
}