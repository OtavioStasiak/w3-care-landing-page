import { Button } from "@/components/ui/button";
import fonts from "@/fonts";
import { List } from "@phosphor-icons/react/dist/ssr";


export function Menu() {
  return (
      <div className="flex flex-row pt-[30px] items-center justify-between px-[30px] w-[100vw] object-cover">
        <p className={`${fonts.poppins_bold.className} text-[24px] text-primary_blue`}>W<span className="text-primary_aqua">3</span> Care</p>


        <div className="hidden min-[910px]:flex  flex-row items-center justify-between  pl-[10vw] w-[78vw]">
          <div className="flex w-[48vw] justify-between">
            <a className={`${fonts.poppins_regular.className} text-[.9em] cursor-pointer text-secondary_blue`}>Início</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Consulte Conosco</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Objetivo</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Seja Voluntário</a>
          </div>
          
          
          <Button className="">Junte-se a nós!</Button>
        </div>

        <button className="min-[910px]:hidden"><List color="#0B132B" size={"3rem"} /></button>
      
      </div>
  );
}
