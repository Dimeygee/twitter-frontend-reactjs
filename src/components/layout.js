import { LogoutBtn } from "./logoutbtn"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserSelector } from "../redux/apiSlice/userslice"

export default function Layout  ({children})  {

    const user = useSelector(UserSelector)

    return (
        <>
            <LogoutBtn />
            <Link to="/">Home</Link>
            <Link to={`/profile/${user.data?.username}`}>Profile</Link>
            {children}
        </>
    )

}