import { Stack } from "@chakra-ui/react";

import { SectionIndex, SectionIndexProducts } from "@/components/Section";
import { Card } from "@/components/Card";
import { TitleIndex } from "@/components/Title";

export default function Home() {
  return (
    <Stack
      as={"main"}
      spacing={20}
    >
      <SectionIndex />

      <Stack
        as={"article"}
      >
        <SectionIndexProducts />
      </Stack>
    </Stack>
  )
}
