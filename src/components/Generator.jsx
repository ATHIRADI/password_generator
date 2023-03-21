import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { FaCopy } from 'react-icons/fa';
import { Score } from "./Score";

export const Generator = () => {
    const { pass, checkStrength, copyText } = useContext(DataContext)

    let borderColor = "border-color-grey"

    if (checkStrength === "Strong") {
        borderColor = "border-green-500"
    } else if (checkStrength === "Good") {
        borderColor = "border-lime-500"
    } else if (checkStrength === "Medium") {
        borderColor = "border-yellow-500"
    } else if (checkStrength === "Okay") {
        borderColor = "border-orange-500"
    } else if (checkStrength === "Weak") {
        borderColor = "border-color-grey"
    } else {
        borderColor = "border-color-grey"
    }


    return (
        <div className="flex justify-center flex-col items-center bg-color-white rounded-t-2xl w-5/6 md:w-1/2 p-5 space-y-2">
            <div className={`flex space-x-5 text-xl border-4 border-color-black w-full ${borderColor}`}>
                <div className="w-full overflow-x-hidden ">
                    <h2 className="p-4">
                        {
                            pass.length > 0 ?
                                <span className="text-lg">
                                    {pass}
                                </span>
                                : <span className="text-xs md:text-lg font-light">
                                    Generate the Perfect Password Every Time
                                </span>
                        }
                    </h2>
                </div>
                <button className="p-4 hover:scale-110 transition-all  duration-150" onClick={copyText}>
                    <FaCopy size={20} />
                </button>
            </div>
            <Score />
        </div >
    )
}