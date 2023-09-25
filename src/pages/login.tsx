import { Stack } from "@chakra-ui/react";

import { CardLogin } from "@/components/Card";

export default function Login() {
    return (
            <Stack
                as={"article"}
                py={[20,20,20,20,20,20,40,40]}
            >
                <CardLogin />
            </Stack>
    )
}