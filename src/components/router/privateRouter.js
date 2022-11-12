import { useSelector } from "react-redux"
import { UserSelector } from "../../redux/apiSlice/userslice"
import { useLocation, Redirect} from "react-router-dom"



export const PrivateRouter = ({  component: Component }) => {

    const Auth = useSelector(state => state.userReducer.isAuthenticated)

    const { pathname } = useLocation()

    if(Auth && pathname === "/login"){
        return <Redirect to="/"/>
    }

    return Auth ? <Component  /> : <Redirect to="/login" />

    

}