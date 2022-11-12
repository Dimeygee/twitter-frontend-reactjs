import { useUserProfileQuery } from "../redux/apiSlice/userslice"
import { Link, useLocation } from 'react-router-dom'
import FlwAndFoll from "../components/flwandfoll"


export const Following = () => {

    const {pathname} = useLocation()
    const username = pathname.split("/").slice(-2)[0]
    const { data, isLoading } = useUserProfileQuery(username)


    return (
        <>
            <FlwAndFoll />
            {data?.following ? data?.following.map(follow => {
                return(
                    <div><Link t0={`/profile/${follow.username}`}>{follow.username}</Link></div>
                )
            }) : <>not following anyone</>}
        </>
    )
}