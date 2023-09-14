import { ButtonLogin } from "@/components/Button";
import { CardContato } from "@/components/Card";
import { InputIndex, InputTextArea } from "@/components/Form";
import { SectionSigaNos } from "@/components/Section";
import { TitleIndex, TitleSecondary } from "@/components/Title";
import { HStack, Stack, Textarea } from "@chakra-ui/react";

export default function Contato() {
    return (
        <Stack
            as={"main"}
            spacing={20}
            
            
        >

            <Stack
            as={"section"}
            spacing={20}
            align={"center"}
            p={20}
            w={"100%"}
            >
                <TitleIndex text={"Entre em contato"} />
                <HStack
                    as={"section"}
                    align={"center"}
                    w={"90%"}
                    spacing={20}
                >
                    <InputIndex label={"Nome"} type={"text"} w={"33%"} placeholder={""} />
                    <InputIndex label={"Email"} type={"email"} w={"33%"} placeholder={""} />
                    <InputIndex label={"Assunto"} type={"text"} w={"33%"} placeholder={""} />
                </HStack>
                <Stack
                    w={"90%"}
                >
                    <InputTextArea label={"Mensagem"} w={"100%"} />
                    <ButtonLogin textButton={"Enviar"} href={"#"} color={"#1EB01B"} colorHover={"#328030"} w={"10%"} />
                </Stack>
            </Stack>

            <Stack
                as={"section"}
                align={"left"}
                w={"100%"}
                px={28}
                spacing={10}
            >
                <Stack
                    px={20}
                >
                    <TitleSecondary text={"Outras formas de falar conosco:"} />
                </Stack>
                <Stack
                    px={20}
                    spacing={6}
                >
                    <CardContato/>
                    <CardContato/>
                </Stack>
            </Stack>

            <Stack
            as={"section"}
            spacing={10}
            align={"center"}
            p={20}
            >
                <SectionSigaNos size={"40px"} width={80} text={"Nossas redes"}/>
            </Stack>


        </Stack>
    )
}