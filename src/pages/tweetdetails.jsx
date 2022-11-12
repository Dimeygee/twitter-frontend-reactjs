
import {  useTweetCommentsQuery, useTweetCommentMutation, useGetTweetQuery } from "../redux/apiSlice/tweetSlice"
import { useState } from "react"
import { useHistory, Link, useLocation } from 'react-router-dom'


export const TweetDetails = () => {

    const [comment , setComment] = useState("")

    const {pathname} = useLocation()

    const id = +pathname.split("/").slice(-1)[0]
    const history = useHistory()
    const handleClick = id => e => history.push(`/comment/${id}`)
    const [tweetComment, { error, data, isLoading } ] = useTweetCommentMutation()

    const handleSubmit = e =>  {
        tweetComment({ "body": comment, "id": id })
    }

   

    const { tweet,loading } = useGetTweetQuery(id) 

    console.log(tweet)

    const { data : comments , isLoading: commentsLoading} = useTweetCommentsQuery(id)

    console.log(comments)

    return(
        <>
            <div>
                <textarea value={comment} onChange={e => setComment(e.target.value)} ></textarea>
                <button onClick={handleSubmit}>submit</button>
            </div>
            <br />
           { loading ? <>loading...</> : tweet?.title }
           <br />
           <div>
            { commentsLoading ? <>loading...</> : comments?.data.map(comment => {
                return (
                    <div 
                    key={comment.id} 
                    style={{padding: "0 20px", cursor: "pointer"}} 
                    /*onClick={handleClick(comment.id)}*/><Link to={`/comment/${comment.id}`}>{comment.body}</Link></div>
                )
            }) }
           </div>
        </>
    )
}