import { HStack, Stack } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

import { ButtonLogin } from "@/components/Button";
import { CardContato } from "@/components/Card";
import { InputIndex, InputTextArea } from "@/components/Form";
import { SectionSigaNos } from "@/components/Section";
import { TitleIndex, TitleSecondary } from "@/components/Title";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Contato() {
    return (
        <>
            <Navbar />
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
                        flexDirection={['column', 'column', 'column', 'column', 'column', 'row', 'row', 'row']}
                    >
                        <InputIndex label={"Nome"} type={"text"} w={["90%", "90%", "90%", "90%", "90%", "33%", "33%", "33%"]} placeholder={""} />
                        <InputIndex label={"Email"} type={"email"} w={["90%", "90%", "90%", "90%", "90%", "33%", "33%", "33%"]} placeholder={""} />
                        <InputIndex label={"Assunto"} type={"text"} w={["90%", "90%", "90%", "90%", "90%", "33%", "33%", "33%"]} placeholder={""} />
                    </HStack>
                    <Stack
                        w={"90%"}
                    >
                        <InputTextArea label={"Mensagem"} w={"100%"} />
                        <ButtonLogin textButton={"Enviar"} href={"#"} color={"#1EB01B"} colorHover={"#328030"} w={["90%", "90%", "90%", "90%", "90%", "10%", "10%", "10%"]} />
                    </Stack>
                </Stack>

                <Stack
                    as={"section"}
                    align={"left"}
                    w={"100%"}
                    px={[0,0,0,0,0,24,24,24]}
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
                        <CardContato text={"Telefone de Contato"} text1={"Você pode entrar em contato através do telefone: (32) 99965-3479. Atendimento de Segunda a Sexta 8hr às 12hr e das 13hr às 18hr."}>
                            <PhoneIcon boxSize={5} />
                        </CardContato>
                        <CardContato text={"E-mail de contato"} text1={"Você também pode entrar em contato através do email: contato@techunix.com.br."}>
                            <EmailIcon boxSize={6} />
                        </CardContato>
                    </Stack>
                </Stack>

                <Stack
                    as={"section"}
                    spacing={10}
                    align={"center"}
                    p={20}
                >
                    <SectionSigaNos size={"40px"} width={80} text={"Nossas redes"} />
                </Stack>


            </Stack>
            <Footer />
        </>
    )
}