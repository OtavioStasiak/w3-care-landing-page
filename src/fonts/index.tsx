import { Poppins } from "next/font/google";

const poppins_light = Poppins({weight: "400", subsets: ["latin"]});
const poppins_thin = Poppins({weight: "500", subsets: ["latin"]});
const poppins_regular = Poppins({weight: "600", subsets: ["latin"]});
const poppins_bold = Poppins({weight: "800", subsets: ["latin"] });


export default  {
    poppins_light,
    poppins_thin,
    poppins_regular,
    poppins_bold
}