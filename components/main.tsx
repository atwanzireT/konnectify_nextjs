import React from "react";
import { About } from "./main/about";
import { Features } from "./main/features";
import { Service } from "./main/services";
import { Portfolio } from "./main/portfolio";
import { Partnership } from "./main/partnership";
import { Contact } from "./main/contact";

export function Main(){
    return (
        <div>
            <About/>
            {/* <Features/>
            <Service/>
            <Portfolio/>
            <Partnership/>
            <Contact/> */}
        </div>
    )
}