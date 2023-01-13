import React, { ReactNode } from "react";
import Head from 'next/head'
import BarraNavegacao from "./BarraNavegacao";

export default function PrincipalContainer({children}) {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />   
            </Head> 
            <BarraNavegacao />
            <div>{children}</div>
        </>
    )
}