import { useState } from "react"
import { useLoginUserMutation } from "../redux/apiSlice/userslice"
import { login } from "../redux/asyncActions/UserAsync"
import { useDispatch , useSelector} from "react-redux"
import { Redirect } from "react-router-dom"

export default function Login (){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const Auth = useSelector(state => state.userReducer.isAuthenticated)


    const [ loginUser ] = useLoginUserMutation()

    const dispatch = useDispatch()

    if(Auth) {
        return <Redirect to="/" />
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const result = await loginUser({email,password})
           // localStorage.setItem("access", result.data.access);
          // localStorage.setItem("refresh", result.data.refresh);
            dispatch(login(result.data))
        }catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}  />
                <div></div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
                <div></div>
                <button>Submit</button>
            </form>
        </div>
    )

}