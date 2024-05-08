import { Button } from "@/components/ui/button";
import fonts from "@/fonts";
import { List } from "@phosphor-icons/react/dist/ssr";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuInterface } from "./menu.interface";
import { useState } from "react";

type Props = MenuInterface;

export function Menu({ onHomePress, onAppointmentPress, onObjectivePress, onVoluntaryPress, onJoinUsPress}: Props) {

  const [open, setOpen] = useState(false);

  function onSelectItem(onItemPress: () => void) {
    setOpen(false);      
    setTimeout(() => {
      onItemPress();
    }, 280);

  };

  return (
      <div className="flex flex-row pt-[30px] max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw] items-center justify-between px-[30px] w-[100vw] object-cover">
        <p className={`${fonts.poppins_bold.className} cursor-default text-[1.3rem] min-[1400px]:text-[2vw] text-primary_blue`}>W<span className="text-primary_aqua">3</span> Care</p>


        <div className="hidden min-[910px]:flex  flex-row items-center justify-between  pl-[10vw] pr-[1.2vw] w-[78vw]">
          <div className="flex w-[48vw] justify-between">
            <a onClick={onHomePress} className={`${fonts.poppins_regular.className} text-[1.1vw] cursor-pointer text-secondary_blue`}>Início</a>
            <a onClick={onAppointmentPress} className={`${fonts.poppins_regular.className} text-[1.1vw]  cursor-pointer text-secondary_blue`}>Consulte Conosco</a>
            <a onClick={onObjectivePress} className={`${fonts.poppins_regular.className} text-[1.1vw]  cursor-pointer text-secondary_blue`}>Objetivo</a>
            <a onClick={onVoluntaryPress} className={`${fonts.poppins_regular.className} text-[1.1vw]  cursor-pointer text-secondary_blue`}>Seja Voluntário</a>
          </div>
          
          
          <Button onClick={onJoinUsPress} className="scale-[0.8] min-[1500px]:scale-[1.2]">Junte-se a nós!</Button>
        </div>

        <Sheet open={open}>
          <SheetTrigger onClick={() => setOpen(true)} className="min-[910px]:hidden"><List color="#0B132B" size={"2rem"} /></SheetTrigger>
          <SheetContent  className="bg-primary_black">
            <div className="flex w-[48vw] flex-col gap-5 mt-[10vw]">
              <a onClick={() => onSelectItem(onHomePress)} className={`${fonts.poppins_regular.className} text-[1.2em] cursor-pointer text-primary_white`}>Início</a>
              <a onClick={() => onSelectItem(onAppointmentPress)} className={`${fonts.poppins_regular.className} text-[1.2em]  cursor-pointer text-primary_white`}>Consulte Conosco</a>
              <a onClick={() => onSelectItem(onObjectivePress)}  className={`${fonts.poppins_regular.className} text-[1.2em]  cursor-pointer text-primary_white`}>Objetivo</a>
              <a onClick={() => onSelectItem(onVoluntaryPress)} className={`${fonts.poppins_regular.className} text-[1.2em]  cursor-pointer text-primary_white`}>Seja Voluntário</a>
            </div>
          </SheetContent>
        </Sheet> 
      </div>
  );
}
