import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import { TextBold, TextProducts } from "../Text";
import React, { useEffect, useState } from "react"
import { View } from "../Modals/View";
import { Edit } from "../Modals/Edit";
import { Delete } from "../Modals/Delete";

interface Code {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    cargo: string;
}

export function TableMembros() {
    const [code, setCode] = useState<Code[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/code')
            .then((response) => response.json())
            .then((data) => setCode(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <Stack
            w={"90%"}
        >
            <Stack>
                <Grid templateColumns='repeat(6, 1fr)' gap={0} borderRadius={"8px 8px 8px 8px"} bg={"red"}>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={10}
                        colStart={1}
                        colEnd={3}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Nome"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        colStart={3}
                        colEnd={5}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Email"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        colStart={5}
                        colEnd={6}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Aniversário"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        colStart={6}
                        colEnd={7}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Cargo"} color={"black"} />
                    </GridItem>
                </Grid>
            </Stack>



            <Stack>
                {code.map((code) => (
                    <Grid templateColumns='repeat(6, 1fr)' gap={0}>
                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            h={14}
                            colStart={1}
                        colEnd={3}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.name} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={3}
                        colEnd={5}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.email} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={5}
                        colEnd={6}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.aniversario} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={6}
                        colEnd={7}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.cargo} color={"fontColor"} />
                        </GridItem>
                    </Grid>
                ))}
            </Stack>
        </Stack>
    )
}

export function TableGerenciamentoMembros() {
    const [code, setCode] = useState<Code[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/code')
            .then((response) => response.json())
            .then((data) => setCode(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <Stack
            w={"100%"}
        >
            <Grid templateColumns='repeat(8, 1fr)' gap={5} bg={"red"} borderRadius={"8px 8px 8px 8px"} >

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    h={10}
                    colStart={1}
                    colEnd={3}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Nome"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    colStart={3}
                    colEnd={6}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Email"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    colStart={6}
                    colEnd={7}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Aniversário"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    colStart={7}
                    colEnd={8}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Cargo"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    colStart={8}
                    colEnd={9}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Ações"} color={"black"} />
                </GridItem>

            </Grid>
            <Stack>
                {code.map((code) => (
                    <Grid templateColumns='repeat(8, 1fr)' gap={5}>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            h={14}
                            colStart={1}
                            colEnd={3}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.name} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={3}
                            colEnd={6}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.email} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={6}
                            colEnd={7}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.aniversario} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={7}
                            colEnd={8}
                        >
                            <TextProducts size={"20px"} textAlign={"center"} text={code.cargo} color={"fontColor"} />
                        </GridItem>

                        <GridItem
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            colStart={8}
                            colEnd={9}
                        >
                            <HStack
                                spacing={3}
                            >
                                <View nome={code.name} email={code.email} aniversario={code.aniversario} cargo={code.cargo} />
                                <Edit id={code.id} nome={code.name} email={code.email} aniversario={code.aniversario} cargo={code.cargo} />
                                <Delete id={code.id} />
                            </HStack>
                        </GridItem>


                    </Grid>
                ))}
            </Stack>
        </Stack>
    )
}