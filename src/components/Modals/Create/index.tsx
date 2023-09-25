import React, { useState } from 'react'
import axios from "axios";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { ButtonCreate } from '@/components/Button';

export function Create() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [name, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [aniversario, setAniversario] = useState("");
    const [cargo, setCargo] = useState("");

    async function handleSave() {
        const data = {
            name,
            email,
            aniversario,
            cargo,
        };

        try {
            const response = await axios.post('http://localhost:3000/code', data);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <ButtonCreate onClick={onOpen}/>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent
                    top={20}
                >
                    <ModalHeader>Criar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input ref={initialRef} placeholder={"Nome"} onChange={(event) => setNome(event.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder={"Email"} onChange={(event) => setEmail(event.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input placeholder={"Aniversário"} onChange={(event) => setAniversario(event.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input placeholder={"Cargo"} onChange={(event) => setCargo(event.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} bg={"red"} _hover={{ bg: "#9F1116" }} mr={3} >Cancelar</Button>
                        <Button onClick={handleSave} bg={"green"} _hover={{ bg: "#328030" }}>Criar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}