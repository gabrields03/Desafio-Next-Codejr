import { Stack } from "@chakra-ui/react";

import { SectionIndex, SectionIndexProducts, SectionIndexPromotionProducts } from "@/components/Section";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
          <SectionIndexPromotionProducts />
        </Stack>
      </Stack>
      <Footer />
    </>
  )
}
