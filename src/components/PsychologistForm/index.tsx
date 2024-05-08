import { useRef, useState } from "react";

import Modal from "react-modal";
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";

type Props = {
    isModalOpened: boolean;
    closeModal: () => void;
};

const formSchema = z.object({
    name: z.string().min(3, {
      message: "Nome deve ter no mínimo 3 caracteres.",
    }),
    mail: z.string().min(3, {
        message: "Email deve ter no mínimo 3 caracteres.",
      }),
    crp: z.string().min(3, {
        message: "CRP deve ter 7 caracteres.",
      }),
    cpf: z.string().min(11, {
        message: "Preencha o CPF corretamente.",
    }),
    phone: z.string().min(10, {
        message: "Telefone deve ter no mínimo 10 caracteres."
    })
  })

export function PsychologistForm({isModalOpened, closeModal}: Props) {
   
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);

    const cpfRef = useRef(null);
    const crpRef = useRef(null);
    const phoneRef = useRef(null);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          cpf: "",
          crp: "",
          phone: ""
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        closeModal();
        toast({
            title: "Sucesso!",
            description: "Você receberá um e-mail com mais informações.",
        });
        setLoading(false);
    };

    return(
        <Modal 
            isOpen={isModalOpened}
            onRequestClose={closeModal}
            onAfterClose={() => form.reset()}
            overlayClassName="react-modal-overlay" 
            className={"flex flex-col pt-5 w-[30vw] max-[990px]:w-[50vw] max-[650px]:w-[55vw]  max-[500px]:w-[70vw] max-[445px]:w-[90vw] max-[390px]:w-[110vw] items-center justify-center relative rounded-md bg-white"}
       >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[90%] mb-[5vh]">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-[100%]">
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl className="w-[100%]">
                                <Input placeholder="Nome Completo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="mail"
                    render={({ field }) => (
                        <FormItem className="w-[100%]">
                            <FormLabel>E-mail</FormLabel>
                            <FormControl className="w-[100%]">
                                <Input placeholder="E-mail" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => {
                        const onChange = field.onChange;

                        return(
                        <FormItem className="w-[100%]">
                            <FormLabel>CPF</FormLabel>
                            <FormControl className="w-[100%]">
                                <Input placeholder="000.000.000-00" {...field}  onChange={(e) => {
                                    e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                                    onChange(e);
                                    
                                }} ref={cpfRef} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}}
                    />
                    <FormField
                    control={form.control}
                    name="crp"
                    render={({ field }) =>  {
                        const onChange = field.onChange;

                        return(
                        <FormItem className="w-[100%]">
                            <FormLabel>CRP</FormLabel>
                            <FormControl className="w-[100%]">
                                <Input placeholder="00/00000" {...field}  onChange={(e) => {
                                    e.target.value = e.target.value.replace(/(\d{2})(\d{5})/, "$1/$2");
                                    onChange(e);
                                    
                                }} ref={crpRef}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => {
                        const onChange = field.onChange;

                        return(
                            <FormItem className="w-[100%]">
                                <FormLabel>Telefone</FormLabel>
                                <FormControl className="w-[100%]">
                                    <Input placeholder="(00) 00000-0000" {...field}  onChange={(e) => {
                                        e.target.value = e.target.value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
                                        onChange(e);
                                        
                                    }} ref={phoneRef} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                    )}}
                    />
                    <div className="w-[100%] flex items-center justify-center">
                        <Button disabled={loading} type="submit">
                            {
                                loading 
                                ?
                                <Loader2 className="mr-2  h-4 w-[5vw] animate-spin" />
                                :
                                "Enviar Formulário"
                            }
                        </Button>
                    </div>
        </form>
        </Form>
        </Modal>
    )
}