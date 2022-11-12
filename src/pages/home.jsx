import { useSelector } from "react-redux"
import { UserSelector } from "../redux/apiSlice/userslice"
import { useGetTweetsQuery } from "../redux/apiSlice/tweetSlice"
import { useEffect } from "react"
import { Link, useHistory } from 'react-router-dom'



export default function Home (){

    const { data, isLoading } = useSelector(UserSelector)
    const { data: tweets, isLoading: loading } = useGetTweetsQuery()
    const history = useHistory()

    const handleClick = id => e => history.push(`tweet/${id}`)

    return(
        <>
            {loading ? (<div>loading...</div>) : tweets?.data.map(tweet =>{
                return (
                    <div 
                        key={tweet.id}
                        style={{padding: "0 20px", cursor: "pointer"}} 
                        onClick={handleClick(tweet.id)}>
                            {tweet.title}
                    </div>
                )
            })}
        </>
    )

}