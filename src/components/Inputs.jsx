import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Inputs = () => {
    const { passwordLength, setPasswordLength,
        includeUpperCase, setIncludeUpperCase,
        includeLowerCase, setIncludeLowerCase,
        includeNumbers, setIncludeNumbers,
        includeSymbols, setIncludeSymbols,
        passwordGeneration } = useContext(DataContext)

    return (
        <div className="flex justify-center flex-col items-center bg-color-white rounded-t-2xl w-5/6 md:w-1/2 p-5 space-y-5">
            <div className="w-full relative">
                <label for="password" className="block mb-5 text-lg">Password Length</label>
                <input id="password" type="range" min="6" max="50" value={passwordLength} className="w-full h-2 bg-color-black rounded-lg appearance-none cursor-pointer range-lg outline-none " onChange={(e) => setPasswordLength(e.target.value)} />
                <p className="px-5 text-color-white py-2 w-10 h-10 uppercase border text-xl rounded-full flex justify-center items-center bg-color-black absolute top-0 right-0">{passwordLength}</p>
            </div>
            <div className="w-full">
                <p className="block mb-2 text-lg">Security Features</p>
                <ul className="items-center w-full text-lg  bg-color-white border border-color-grey flex flex-col xl:flex-row" id="features">
                    <li className="w-full">
                        <div className="flex items-center pl-3 border">
                            <input type="checkbox" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} name="upperCase" id='uppercase' className="w-5 h-5 text-color-black bg-color-grey   focus:ring-color-black focus:ring-2" />
                            <label htmlFor="uppercase" className="w-full py-3 ml-2  text-color-black">Uppercase</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center pl-3 border">
                            <input type="checkbox" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} name="lowerCase" id='lowercase' className="w-5 h-5 text-color-black bg-color-grey focus:ring-color-black focus:ring-2" />
                            <label htmlFor="lowercase" className="w-full py-3 ml-2  text-color-black">Lower Case</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center pl-3 border">
                            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} name="numbers" id="numbers" className="w-5 h-5 text-color-black bg-color-grey focus:ring-color-black focus:ring-2" />
                            <label htmlFor="numbers" className="w-full py-3 ml-2  text-color-black">Numbers</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center pl-3 border">
                            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} name="symbols" id="symbols" className="w-5 h-5 text-color-black bg-color-grey focus:ring-color-black focus:ring-2" />
                            <label htmlFor="symbols" className="w-full py-3 ml-2  text-color-black">Symbols</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-full">

                <button onClick={passwordGeneration} className='border px-5 py-2 hover:scale-105 active:translate-y-1  text-lg transition-all duration-500 bg-color-black text-color-white'>Generate Password</button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}