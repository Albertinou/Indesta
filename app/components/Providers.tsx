"use client";


import { ReactNode } from "react"
import { CartProvider as USCProvider} from "use-shopping-cart"



export default function CartProvider({children}: {children: ReactNode}){
    return (
        <USCProvider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_SECRET_STRIPE_KEY as string}
        successUrl="https://indesta.vercel.app/stripe/success"
        cancelUrl="https://indesta.vercel.app/stripe/error"
        currency="EUR"
        billingAddressCollection={true}
        shouldPersist={true}
        language="lt"
        
        >
            {children}
       
            
        </USCProvider>
    )
}