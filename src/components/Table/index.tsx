import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { TextBold, TextProducts } from "../Text";

export function TableMembros() {
    return (
        <Stack
            w={"90%"}
            spacing={10}
        >
            <Stack>
                <Grid templateColumns='repeat(4, 1fr)' gap={0}>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        bg={"red"}
                        h={10}
                        borderRadius={"8px 0px 0px 8px"}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Nome"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        bg={"red"}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Email"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        bg={"red"}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Aniversário"} color={"black"} />
                    </GridItem>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        bg={"red"}
                        borderRadius={"0px 8px 8px 0px"}
                    >
                        <TextBold fontSize={"20px"} textAlign={"center"} text={"Cargo"} color={"black"} />
                    </GridItem>
                </Grid>
            </Stack>



            <Stack>

                <Grid templateColumns='repeat(4, 1fr)' gap={0}>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={10}
                        borderRadius={"8px 0px 0px 8px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"Gabriel Domingos"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"gabriel.domingos@codejr.com.br"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"19/11"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}


                        borderRadius={"0px 8px 8px 0px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"Assessor"} color={"fontColor"} />
                    </GridItem>
                </Grid>

                <Grid templateColumns='repeat(4, 1fr)' gap={0}>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={10}
                        borderRadius={"8px 0px 0px 8px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"João Vitor Fernandes Ribeiro Carneiro Ramos"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"joaovitor.fernandes@codejr.com.br"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"19/11"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}


                        borderRadius={"0px 8px 8px 0px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"Assessor"} color={"fontColor"} />
                    </GridItem>
                </Grid>

                <Grid templateColumns='repeat(4, 1fr)' gap={0}>
                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={10}
                        borderRadius={"8px 0px 0px 8px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"Gabriel Domingos"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"gabriel.domingos@codejr.com.br"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"19/11"} color={"fontColor"} />
                    </GridItem>

                    <GridItem
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}


                        borderRadius={"0px 8px 8px 0px"}
                    >
                        <TextProducts size={"20px"} textAlign={"center"} text={"Assessor"} color={"fontColor"} />
                    </GridItem>
                </Grid>
            </Stack>
        </Stack>
    )
}

export function TableGerenciamentoMembros() {
    return (
        <Stack
            w={"90%"}
        >
            <Grid templateColumns='repeat(5, 1fr)' gap={0}>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"red"}
                    h={10}
                    borderRadius={"8px 0px 0px 8px"}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Nome"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"red"}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Email"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"red"}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Aniversário"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"red"}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Cargo"} color={"black"} />
                </GridItem>

                <GridItem
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg={"red"}
                    borderRadius={"0px 8px 8px 0px"}
                >
                    <TextBold fontSize={"20px"} textAlign={"center"} text={"Açoes"} color={"black"} />
                </GridItem>

            </Grid>
        </Stack>
    )
}