"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';
import { EmailTemplate } from "../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
   
try{
    const { error } = await resend.emails.send({
        from: 'Albertas test <onboarding@mb-indesta.lt>',
        to: 'albertuciukas@gmail.com',
        subject: 'Nauja žinutė iš puslapio!',
        react: EmailTemplate({ firstName: emailFormData.firstName, email: emailFormData.email, message: emailFormData.message }),
      });
      if (error) {
        return (error);
      }
}
catch (e) {
    throw (e)
}
    
      
}