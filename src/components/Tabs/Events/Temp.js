import React from "react";
import {Mosaic, Ichip, Spybits, Commnet, Xiota, Cassandra, Digisim, Funckit, Continuum } from "./Events_Components.js"

export const Temp = (prop) => 
{
    if(prop.data == 1)
    {
        return (
        <Mosaic />
    )}

    else if(prop.data == 2){
        return(
            <Ichip />
        )
    }

    else if(prop.data == 3){
        return(
            <Spybits />
        )
    }

    else if(prop.data == 4){
        return(
            <Commnet />
        )
    }

    else if(prop.data == 5){
        return(
            <Xiota />
        )
    }

    else if(prop.data == 6){
        return(
            <Cassandra />
        )
    }

    else if(prop.data == 7){
        return(
            <Digisim />
        )
    }

    else if(prop.data == 8){
        return(
            <Funckit />
        )
    }

    else if(prop.data == 9){
        return(
            <Continuum />
        )
    }

    else
    {
    return(
        
          <div>
              Hello World
          </div>  
    )
    }

}
