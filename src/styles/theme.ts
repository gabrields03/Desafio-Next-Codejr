import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme ({
    colors: {
        red: "#D40000",
        green: "#1EB01B",
        blue: "#494856",
        fontColor: "#C1CEDA",
        black: "#111111",
    },

    styles: {
        global: {
            body: {
                bg: "#2F2F2F"
            }
        }
    },

    breakpoints: {
        "2xl" : "2560px",
        "xl"  : "1440px",
        "lg"  : "1024px",
        "md"  : "768px",
        "sm"  : "425px",
        "xs"  : "375px",
        "xxs" : "320px",
        "xxxs": "200px"
    }
})



