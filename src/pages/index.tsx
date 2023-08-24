import { Image } from "@/components/Image";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack>
      <Stack>
        <Image src={"/capa.png"} alt={"Imagem de capa da página inical"} width={1440} height={480}/>
      </Stack>
    </Stack>
  )
}
