import { useState, createContext } from 'react'
import { successMessage, failMessage } from "../components/Messages"
import { numbers, upperCase, lowerCase, specialCharacter } from "../components/Character"
import { toast } from 'react-toastify';

export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    let paaswordId = 0;

    const [pass, setPass] = useState("");
    const [passwordLength, setPasswordLength] = useState(6);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [checkStrength, setCheckStrength] = useState("");
    const [previousPasssword, setPreviousPassword] = useState({});
    const [oldCopy, setOldCopy] = useState("");
    const [showPrevious, setShowPrevious] = useState(false);

    const passwordGeneration = () => {
        if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
            alerts("Please select any one of checkboxs", true)
        } else {
            let characterList = "";
            if (includeUpperCase) {
                characterList = characterList + upperCase
            }
            if (includeLowerCase) {
                characterList = characterList + lowerCase
            }
            if (includeNumbers) {
                characterList = characterList + numbers
            }
            if (includeSymbols) {
                characterList = characterList + specialCharacter
            }
            setPass(createPassword(characterList))
            setCheckStrength(PasswordStrength)
            alerts("Password is generated Successfully", false);
            storePassword()
        }
    }
    const createPassword = (characterList) => {

        let password = "";
        const characterListLength = characterList.length
        for (let i = 0;i < passwordLength;i++) {
            const characterIndex = Math.round(Math.random() * characterListLength)
            password = password + characterList.charAt(characterIndex)
        }
        return password

    }
    const copyText = () => {
        if (pass === "") {
            alerts(failMessage, true)
        } else {
            alerts(successMessage, false)
            navigator.clipboard.writeText(pass)
        }
    }

    const alerts = (message, hasError = false) => {
        if (hasError) {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast(message, {
                position: "bottom-left",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const PasswordStrength = () => {
        let checking = "";
        if (passwordLength >= 16) {
            if (includeUpperCase === true && includeLowerCase === true && includeNumbers === true && includeSymbols === true) {
                return checking = "Strong"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === true && includeSymbols === false) {
                return checking = "Good"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === true && includeSymbols === true) {
                return checking = "Good"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === false && includeSymbols === true) {
                return checking = "Good"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === true && includeSymbols === true) {
                return checking = "Good"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === false && includeSymbols === false) {
                return checking = "Medium"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === true && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === false && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === true && includeSymbols === false) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === false && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === true && includeSymbols === false) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === false && includeSymbols === false) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === false && includeSymbols === true) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === true && includeSymbols === false) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === false && includeSymbols === false) {
                return checking = "Weak"
            } else {
                return checking = "Bad"
            }
        } else if (passwordLength <= 16) {
            if (includeUpperCase === true && includeLowerCase === true && includeNumbers === true && includeSymbols === true) {
                return checking = "Good"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === true && includeSymbols === false) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === true && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === false && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === true && includeSymbols === true) {
                return checking = "Medium"
            } else if (includeUpperCase === true && includeLowerCase === true && includeNumbers === false && includeSymbols === false) {
                return checking = "Okay"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === true && includeSymbols === true) {
                return checking = "Okay"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === false && includeSymbols === true) {
                return checking = "Okay"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === true && includeSymbols === false) {
                return checking = "Okay"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === false && includeSymbols === true) {
                return checking = "Okay"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === true && includeSymbols === false) {
                return checking = "Okay"
            } else if (includeUpperCase === true && includeLowerCase === false && includeNumbers === false && includeSymbols === false) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === false && includeSymbols === true) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === false && includeNumbers === true && includeSymbols === false) {
                return checking = "Weak"
            } else if (includeUpperCase === false && includeLowerCase === true && includeNumbers === false && includeSymbols === false) {
                return checking = "Weak"
            } else {
                return checking = "Bad"
            }
        }
    }
    const storePassword = () => {
        if (pass.length >= 6) {
            setPreviousPassword({
                ...previousPasssword,
                id: paaswordId++, passwords: pass, strength: checkStrength
            })
            setShowPrevious(true)
        }

    }

    const copyTextOld = () => {

        if (oldCopy === "") {
            alerts(failMessage, true)
        } else {
            alerts(successMessage)
            navigator.clipboard.writeText(oldCopy)
        }
    }

    return (
        <DataContext.Provider value={{
            pass, setPass,
            passwordLength, setPasswordLength,
            includeUpperCase, setIncludeUpperCase,
            includeLowerCase, setIncludeLowerCase,
            includeNumbers, setIncludeNumbers,
            includeSymbols, setIncludeSymbols,
            checkStrength, setCheckStrength,
            previousPasssword, setPreviousPassword,
            oldCopy, setOldCopy,
            showPrevious, setShowPrevious,
            passwordGeneration, createPassword, copyText, alerts, PasswordStrength, storePassword, copyTextOld

        }}>
            {children}
        </DataContext.Provider>
    )


}