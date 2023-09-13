import { Stack } from "@chakra-ui/react";

import { SectionIndex, SectionIndexProducts, SectionIndexPromotionProducts } from "@/components/Section";

export default function Home() {
  return (
    <Stack
      as={"main"}
      spacing={20}
    >
      <SectionIndex />

      <Stack
        as={"article"}
        spacing={20}
      >
        <SectionIndexProducts />
        <SectionIndexPromotionProducts/>
      </Stack>
    </Stack>
  )
}
