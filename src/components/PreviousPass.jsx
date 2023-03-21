import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { FaCopy } from 'react-icons/fa';

export const PreviousPass = () => {
    const { showPrevious, previousPasssword, setOldCopy,
        copyTextOld, checkStrength } = useContext(DataContext)
    let pword = ""
    let stren = ""

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



    if (previousPasssword.id !== undefined) {

        pword = previousPasssword.passwords
        stren = previousPasssword.strength

        useEffect(() => {
            setOldCopy(pword)
        }, []);
    }
    return (
        <>
            {
                showPrevious === true ? <div className="flex justify-center flex-col items-center bg-color-white rounded-t-2xl w-5/6 md:w-1/2 p-5 space-y-2">
                    <p className="block mb-2 text-lg text-start w-full">Previous Password</p>
                    <div className="flex  text-xl border-2 border-color-grey w-full justify-between items-center flex-row">
                        <div className="w-full overflow-x-hidden">
                            <h2 className="text-lg p-2">{pword}</h2>
                        </div>
                        <div>
                            <button className="p-2 hover:scale-110 transition-all  duration-150" onClick={copyTextOld} >
                                <FaCopy size={20} />
                            </button>
                        </div>

                    </div>
                </div> : ""
            }
        </>
    )

}



