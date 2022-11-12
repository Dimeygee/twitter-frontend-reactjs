import { useState } from "react"

export default function Register (){

    const [ email, setEmail ] = useState()
    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const [ restPassword, setResetPassword ] = useState()

    return(
        <div>
            <form>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}  />
                <div></div>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}  />
                <div></div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
                <div></div>
                <input type="password" value={restPassword} onChange={e => setResetPassword(e.target.value)}  />
                <div></div>
                <button>Submit</button>
            </form>
        </div>
    )

}