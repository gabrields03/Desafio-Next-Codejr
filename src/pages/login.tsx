import { Stack } from "@chakra-ui/react";

import { CardLogin } from "@/components/Card";

export default function Login() {
    return (
            <Stack
                as={"article"}
                p={20}
            >
                <CardLogin />
            </Stack>
    )
}