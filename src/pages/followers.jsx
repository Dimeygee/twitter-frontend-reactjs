import { useUserProfileQuery } from "../redux/apiSlice/userslice"
import { Link, useLocation } from 'react-router-dom'
import FlwAndFoll from "../components/flwandfoll"


export const Followers = () => {

    const {pathname} = useLocation()
    const username = pathname.split("/").slice(-2)[0]
    const { data, isLoading } = useUserProfileQuery(username)


    return (
        <>
            <FlwAndFoll />
            {data?.followers ? data?.followers.map(follow => {
                return(
                    <div><Link t0={`/profile/${follow.username}`}>{follow.username}</Link></div>
                )
            }) : <>you have no followers</>}
        </>
    )
}