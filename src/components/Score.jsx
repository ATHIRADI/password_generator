import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import bar from "../assets/bar.svg"

export const Score = () => {
    const { checkStrength } = useContext(DataContext)

    let percentScore = 0
    let bgColor = "bg-color-grey"

    if (checkStrength === "Strong") {
        percentScore = 100
        bgColor = "bg-green-500"
    } else if (checkStrength === "Good") {
        percentScore = 80
        bgColor = "bg-lime-500"
    } else if (checkStrength === "Medium") {
        percentScore = 60
        bgColor = "bg-yellow-500"
    } else if (checkStrength === "Okay") {
        percentScore = 40
        bgColor = "bg-orange-500"
    } else if (checkStrength === "Weak") {
        percentScore = 20
        bgColor = "bg-color-grey"
    } else {
        percentScore = 0
    }




    return (


        <div className="w-full flex flex-row space-x-5 justify-between">
            <div className="w-full flex flex-row gap-2">
                <div className={`border h-2 w-10 ${bgColor} ${percentScore >= 20 ? `` : `hidden`}`}></div>
                <div className={`border h-2 w-10 ${bgColor} ${percentScore >= 40 ? `` : `hidden`}`}></div>
                <div className={`border h-2 w-10 ${bgColor} ${percentScore >= 60 ? `` : `hidden`}`}></div>
                <div className={`border h-2 w-10 ${bgColor} ${percentScore >= 80 ? `` : `hidden`}`}></div>
                <div className={`border h-2 w-10 ${bgColor} ${percentScore >= 100 ? `` : `hidden`}`}></div>
            </div>
            <div className={` px-5 text-color-black py-2 w-26 h-10 uppercase ${bgColor}`}>
                {percentScore > 0 ? <h2>{checkStrength}</h2> : <img className="animate-spin h-5 w-auto px-1" src={bar} />}
            </div>
        </div >
    )
}