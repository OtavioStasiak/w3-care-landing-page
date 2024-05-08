import { MutableRefObject, useRef, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import fonts from "@/fonts";

import Background from "../../public/image.png";
import OurObjective from "../../public/our_objective_1.png";

import { AppStoreLogo, GooglePlayLogo, Globe, Heart } from "@phosphor-icons/react/dist/ssr";

import { Menu } from "@/components/Menu";
import { PsychologistForm } from "@/components/PsychologistForm";
import { Toaster } from "@/components/ui/toaster"
import { PatientForm } from "@/components/PatientForm";


export default function Home() {

  const [openVoluntaryModal, setOpenVoluntaryModal] = useState(false);
  const [openPatientModal, setOpenPatientModal] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const appointmentRef = useRef<HTMLDivElement>(null);
  const objectiveRef = useRef<HTMLDivElement>(null);
  const voluntaryRef =   useRef<HTMLDivElement>(null);

  const scrollToDiv = (ref: MutableRefObject<HTMLDivElement | null>) => {

    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <div  className="flex-1 bg-primary_white">
    <div className="absolute min-[910px]:hidden w-[100vw] h-[100vh] max-[581px]:h-[120vh] max-[565px]:h-[100vh] max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw]">
      <Image alt="background" 
        placeholder="blur"
        quality={100}
        src={Background}
        className="object-cover w-[100%] h-[100%]"
      />
    </div> 

     <Image alt="background" 
      placeholder="blur"
      quality={100}
      src={Background}
      fill      
      className="max-[909px]:hidden"
    />

    <div ref={homeRef} className="absolute">
      <Menu 
       onHomePress={() => scrollToDiv(homeRef)}
       onAppointmentPress={() => scrollToDiv(appointmentRef)}
       onObjectivePress={() => scrollToDiv(objectiveRef)}
       onVoluntaryPress={() => scrollToDiv(voluntaryRef)}
       onJoinUsPress={() => setOpenVoluntaryModal(true)}
      />

      <div className="pt-[80px] max-[565px]:pt-[80px] pl-[50px] text-primary_blue">
        <div>
          <p className={`${fonts.poppins_bold.className} text-[80px] max-[565px]:text-[50px] text-primary_blue`}>W<span className="text-primary_aqua">3</span> Care</p>
          <p className={`${fonts.poppins_bold.className} text-[80px] max-[565px]:text-[50px]  text-primary_blue`}>Sua luta<br/>é NOSSA luta</p>
        </div>
        
        <Button onClick={() => setOpenPatientModal(true)} className="mt-[7vh] max-[565px]:mt-[5vh] min-[1500px]:scale-[1.4] drop-shadow-lg">Consulte conosco!</Button>
        <div className="flex flex-row gap-[50px] mt-[5vh]">
          <div  className={`${fonts.poppins_bold.className}  flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">200 <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white shadow-sm mb-[1.78rem] text-shadow-sm">Voluntários</span>
          </div>

          <div  className={`${fonts.poppins_bold.className} flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">15K <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white text-shadow-sm">Usuários<br/>ativos</span>
          </div>

        
          <div  className={`${fonts.poppins_bold.className} flex items-center justify-center flex-col text-[20px] text-primary_blue`}>
            <span className="text-primary_blue text-[2rem]">50 <span className="text-secondary_aqua">+</span><br/></span>
            <span className="text-primary_white text-shadow-sm">Hospitais<br/>parceiros</span>
          </div>
      </div>
      </div>
      <div ref={appointmentRef} className="mt-[45vh] w-[100vw] max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw] flex flex-col justify-center items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] max-[385px]:text-[2.5rem] text-primary_blue`}>Consulte Conosco!</strong>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem] w-[65vw]  max-[385px]:w-[150vw]  max-[385px]:text-[1.2rem] text-primary_black text-center mt-[5vh]`}>Para consultar conosco é necessário apenas realizar o cadastro, você poderá acessar nosso sistema de consultas pela web ou pelos apps disponíveis na Google Play Store e App Store.</p>    
        
        <div className="flex flex-row  mt-[5rem]">
          <Button className="mt-[7vh] w-[7rem] h-[7rem] mx-[1.5rem] rounded-full drop-shadow-lg"><AppStoreLogo size={"4rem"} color={"#1C2541"} /></Button>
          <Button className="mt-[7vh] w-[7rem] h-[7rem] mx-[1.5rem] rounded-full drop-shadow-lg"><GooglePlayLogo size={"4rem"} color={"#1C2541"} /></Button>
          <Button className="mt-[7vh] w-[7rem] h-[7rem] mx-[1.5rem] rounded-full drop-shadow-lg"><Globe size={"4rem"} color={"#1C2541"} /></Button>
        </div>
      </div>
     
      <div ref={objectiveRef} className="mt-[35vh] w-[100vw] max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw] flex flex-col items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] max-[385px]:text-[2.5rem] mb-[10vh] text-primary_blue`}>Nosso Objetivo</strong>
        <div className="w-[100vw] flex items-center justify-center pr-[1vw]">
          <Image alt="nosso objetivo" placeholder="blur"
            src={OurObjective}
            sizes="80vw"
            quality={100}
            className="z-0"
            
          />
        
        </div>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem]  max-[385px]:w-[150vw]  max-[385px]:text-[1.2rem] w-[60vw] text-primary_blue text-left mt-[15vh]`}>A W3Care foi criada para ser uma rede de apoio psicológico para pacientes oncológicos e toda a família do paciente, com psicólogos voluntários disponíveis para darem o devido apoio na luta contra o câncer.<br/>Nosso objetivo é acompanhar o máximo de pacientes e familiares com excelência e fazer com que não se sintam sozinhos durante o tratamento oncológico porque sua luta é NOSSA luta!</p>    

      </div>

      <div ref={voluntaryRef} className="mt-[35vh] w-[100vw] max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw]  flex flex-col items-center">
        <strong className={`${fonts.poppins_bold.className} text-[3.5rem] max-[385px]:text-[2.5rem] text-primary_blue`}>Seja Voluntário!</strong>
        <p className={`${fonts.poppins_thin.className} text-[1.5rem] w-[65vw] max-[385px]:w-[150vw]  max-[385px]:text-[1.2rem] text-primary_blue text-center mt-[5vh]`}>É psicólogo, ou estudante de psicologia e gostaria de atuar conosco?<br/>Preencha o formulário e em até 72 horas entraremos em contato!</p>    
        <Button onClick={() => setOpenVoluntaryModal(true)} className="w-[280px] mt-[75px] text-primary_blue text-[1.1rem] drop-shadow-xl">Preencha o Formulário</Button>
      </div>

      <footer className={`w-[100vw] items-center max-[565px]:w-[120vw] max-[445px]:w-[135vw] max-[385px]:w-[163vw]  text-[1.2rem] pb-[15px] flex justify-center mt-[20vh] ${fonts.poppins_bold.className} text-primary_blue`}>
        Desenvolvido com amor por Otávio Stasiak <Heart className="ml-[2px] mb-[1px]" />
      </footer>
    
    </div>
    <PsychologistForm closeModal={() => setOpenVoluntaryModal(false)} isModalOpened={openVoluntaryModal}/>
    <PatientForm closeModal={() => setOpenPatientModal(true)} isModalOpened={openPatientModal}/>
    <Toaster />
   </div>
  );
}
