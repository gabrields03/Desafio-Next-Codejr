import { InputIndex, InputTextArea } from "@/components/Form";
import { TitleIndex } from "@/components/Title";
import { HStack, Stack, Textarea } from "@chakra-ui/react";

export default function Contato(){
    return(
        <Stack
            as={"main"}
            spacing={20}
            align={"center"}
            p={20}
        >

            <TitleIndex text={"Entre em contato"}/>

            <HStack
            as={"section"}
            align={"center"}
            w={"90%"}
            spacing={20}
            >
                <InputIndex label={"Nome"} type={"text"} w={"33%"} placeholder={""}/>
                <InputIndex label={"Email"} type={"email"} w={"33%"} placeholder={""}/>
                <InputIndex label={"Assunto"} type={"text"} w={"33%"} placeholder={""}/>
                
            </HStack>

            <Stack
                w={"90%"}
            >
                <InputTextArea label={"Mensagem"} w={"100%"}/>
            </Stack>
            

        </Stack>
    )
}