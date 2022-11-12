import { useDispatch } from "react-redux"
import { logout } from "../redux/asyncActions/UserAsync"

export const LogoutBtn = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <button onClick={handleClick}>logout</button>
    )

}