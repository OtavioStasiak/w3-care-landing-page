import Image from "next/image";
import { Button } from "@/components/ui/button";
import fonts from "@/fonts";
import Background from "../../public/image.png";
import OurObjective from "../../public/our_objective_1.png";
import OurObjectiveII from "../../public/our_objective_2.png";

import { AppStoreLogo, GooglePlayLogo, Globe, Heart } from "@phosphor-icons/react/dist/ssr";


export default function Home() {
  return (
   <div className="flex-1 bg-primary_white w-100 h-100">
    <Image alt="background" placeholder="empty"
      quality={100}
      fill
      sizes="100vw"  src={Background}
    />

    <div className="absolute">
      <div className="flex flex-row pt-[30px] items-center justify-between px-[30px] w-[100vw] object-cover">
        <p className={`${fonts.poppins_bold.className} text-[24px] text-primary_blue`}>W<span className="text-primary_aqua">3</span> Care</p>


        <div className="hidden md:flex  flex-row items-center justify-between  pl-[10vw] w-[78vw]">
          <div className="flex w-[48vw] justify-between">
            <a className={`${fonts.poppins_regular.className} text-[.9em] cursor-pointer text-secondary_blue`}>Início</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Consulte Conosco</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Objetivo</a>
            <a className={`${fonts.poppins_regular.className} text-[.9em]  cursor-pointer text-secondary_blue`}>Seja Voluntário</a>
          </div>
          
          
          <Button className="">Junte-se a nós!</Button>
        </div>

        <button className="md:hidden">open Drawer</button>
      
      </div>


      <div className="pt-[80px] pl-[50px] text-primary_blue">
        <div>
          <p className={`${fonts.poppins_bold.className} text-[80px] text-primary_blue`}>W<span className="text-primary_aqua">3</span> Care</p>
          <p className={`${fonts.poppins_bold.className} text-[80px] text-primary_blue`}>Sua luta<br/>é NOSSA luta</p>
        </div>
        
        <Button className="mt-[7vh] drop-shadow-lg">Consulte conosco!</Button>
        <div className="flex flex-row gap-[50px] mt-[5vh]">
          <div  className={`${fonts.poppins_bold.className}  flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">200 <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white mb-[1.78rem]">Voluntários</span>
          </div>

          <div  className={`${fonts.poppins_bold.className} flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">15K <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white">Usuários<br/>ativos</span>
          </div>

        
          <div  className={`${fonts.poppins_bold.className} flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">50 <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white">Hospitais<br/>parceiros</span>
          </div>
      </div>
      </div>
      <div className="mt-[35vh] w-[100vw] flex flex-col items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] text-primary_blue`}>Consulte Conosco!</strong>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem] w-[65vw] text-primary_black text-center mt-[5vh]`}>Para consultar conosco é necessário apenas realizar o cadastro, você poderá acessar nosso sistema de consultas pela web ou pelos apps disponíveis na Google Play Store e App Store.</p>    
        
        <div className="flex flex-row gap-[7rem] mt-[5rem]">
          <Button className="mt-[7vh] w-[7rem] h-[7rem] rounded-full drop-shadow-lg"><AppStoreLogo size={"4rem"} color={"#1C2541"} /></Button>
          <Button className="mt-[7vh] w-[7rem] h-[7rem] rounded-full drop-shadow-lg"><GooglePlayLogo size={"4rem"} color={"#1C2541"} /></Button>
          <Button className="mt-[7vh] w-[7rem] h-[7rem] rounded-full drop-shadow-lg"><Globe size={"4rem"} color={"#1C2541"} /></Button>
        </div>
      </div>
     
      <div className="mt-[35vh] w-[100vw] flex flex-col items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] mb-[10vh] text-primary_blue`}>Nosso Objetivo</strong>
        <div className="w-[100vw] pl-[20vw]">
          <Image alt="nosso objetivo" placeholder="blur"
            src={OurObjective}
            sizes="70vw"
            quality={100}
            
          />
          <Image alt="nosso objetivo" placeholder="blur"
            quality={100}
            sizes="45vh"
            src={OurObjectiveII}
            className="absolute bottom-[105vh] left-[55vw]"
          />
        </div>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem] w-[60vw] text-primary_blue text-left mt-[25vh]`}>A W3Care foi criada para ser uma rede de apoio psicológico para pacientes oncológicos e toda a família do paciente, com psicólogos voluntários disponíveis para darem o devido apoio na luta contra o câncer.<br/>Nosso objetivo é acompanhar o máximo de pacientes e familiares com excelência e fazer com que não se sintam sozinhos durante o tratamento oncológico porque sua luta é NOSSA luta!</p>    

      </div>

      <div className="mt-[35vh] w-[100vw] flex flex-col items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] text-primary_blue`}>Seja Voluntário!</strong>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem] w-[65vw] text-primary_blue text-center mt-[5vh]`}>É psicólogo, ou estudante de psicologia e gostaria de atuar conosco?<br/>Preencha o formulário e em até 72 horas entraremos em contato!</p>    
        <Button className="w-[280px] mt-[75px] text-primary_blue text-[1.1rem] drop-shadow-xl">Preencha o Formulário</Button>

      </div>
      <footer className={`w-[100vw] items-center text-[1.2rem] pb-[15px] flex justify-center mt-[20vh] ${fonts.poppins_bold.className} text-primary_blue`}>Desenvolvido com amor por Otávio Stasiak <Heart className="ml-[2px] mb-[1px]" /></footer>
    
    </div>

    
   

   </div>
  );
}
