import { FaMusic } from "react-icons/fa";
import { PiAirplaneLandingFill } from "react-icons/pi";
import {RiArrowRightLine } from "react-icons/ri"
import { SiApplemusic } from "react-icons/si";
import { airportFonts } from "@fonts/fonts";

export default function AirportStyleSign(text: string, icon: string) {
    const getIcon = (icon: string, size: number) => {
        if (icon === "music") {
            return (<SiApplemusic style={{color: "black", fill: "yellow"}} size={size}/>)
        } else {
            return (<PiAirplaneLandingFill size={size}/>)
        }
    }
    const classAppend = airportFonts.className + " airport-sign"
    return (
        <div className={classAppend}>
            <RiArrowRightLine size={64}/>
            {getIcon(icon, 64)}
            
            <div style={{padding: "1.5rem"}}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}