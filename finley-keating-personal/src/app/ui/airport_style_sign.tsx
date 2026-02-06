import { FaMusic } from "react-icons/fa";
import { PiAirplaneLandingFill } from "react-icons/pi";

export default function AirportStyleSign(text: string, icon: string) {
    const getIcon = (icon: string) => {
        if (icon === "music") {
            return (<FaMusic/>)
        } else {
            return (<PiAirplaneLandingFill/>)
        }
    }
    return (
        <div>
            <p>
                {text}
            </p>
            {getIcon(icon)}
        </div>
    )
}