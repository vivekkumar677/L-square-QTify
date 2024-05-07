import React from "react";
import { Box } from "@mui/material";
import HeroImage from "../../assets/headphone.png"
import "../Hero/hero.css";

export default function Hero(){
    return(
        <>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                // width: "100vw",
                height: "30%",
                color: "white"
            }}>
                <div className="content">
                    <div className="text"> 
                        <p>100 Thousand Songs, ad-free</p>
                        <p>Over thousands podcast episodes</p>
                    </div>
                   
                    <img src={HeroImage} alt="hero" />
                </div>
            </Box>
        </>
    )
}