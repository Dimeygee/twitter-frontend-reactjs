import { ProfileSelector, useUserProfileQuery , UserSelector} from '../redux/apiSlice/userslice'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export default function Profile(){

    const {pathname} = useLocation()

    const username = pathname.split("/").slice(-1)[0]

  const { data, isLoading} = useUserProfileQuery(username)



    return(
        <div>
            <div>{ data?.username }</div>
            <div>{ data?.email }</div>
            <div>
                <span><Link to={`/${username}/followers`}>followers :{ data?.followers }</Link></span>
                <span><Link to={`/${username}/following`}>following :{ data?.following }</Link></span>
            </div>
        </div>
    )

}