import { Link, useLocation } from 'react-router-dom'

export default function FlwAndFoll (){

    const {pathname} = useLocation()
    const username = pathname.split("/").slice(-2)[0]

    return (
        <>
            <div>
                <span><Link to={`/${username}/followers`}>Followers</Link></span>
                <span><Link to={`/${username}/following`}>Following</Link></span>
            </div>
        </>
    )

}
