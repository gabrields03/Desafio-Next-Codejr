import { CardLogin } from "@/components/Card";
import { Stack } from "@chakra-ui/react";

export default function Login(){
    return(
        <Stack
        as={"article"}
            p={20}
        >
            <CardLogin/>
        </Stack>
    )
}