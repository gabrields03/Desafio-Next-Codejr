import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
} from "@chakra-ui/react";

import axios from "axios";
import React from "react";

interface DeleteProps {
    id: number
}

export function Delete({ id }: DeleteProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    async function excluirFuncionario() {
        try {
            const response = await axios.delete(`http://localhost:3000/code/${id}`);
            window.location.reload();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#ffffff"
                width={"20px"}
                height={"20px"}
                onClick={onOpen}
                style={{ cursor: "pointer" }}
            >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent
                    top={20}
                    bg={"#2F2F2F"}
                    color={"fontColor"}
                >
                    <ModalHeader>Deseja excluir o membro?</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button onClick={onClose} bg={"green"} _hover={{ bg: "#328030" }} mr={3} >Cancelar</Button>
                        <Button onClick={excluirFuncionario} bg={"red"} _hover={{ bg: "#9F1116" }}>Excluir</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}