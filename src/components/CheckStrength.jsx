import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export const CheckStrength = () => {
    const { passwordLength } = useContext(DataContext)

    return (
        <div>CheckStrength</div>
    )
}