import React, { ReactNode } from "react";
import BarraNavegacao from "./BarraNavegacao";

export default function PrincipalContainer({children}) {
    return(
        <>
            <BarraNavegacao />
            <div>{children}</div>
        </>
    )
}