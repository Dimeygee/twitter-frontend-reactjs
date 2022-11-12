


import { useLocation } from "react-router-dom"
import {  useTweetCommentsQuery, useTweetCommentMutation } from "../redux/apiSlice/tweetSlice"
import { useState } from "react"
import { useHistory } from 'react-router-dom'


export const CommentDetails = () => {

    const [comment , setComment] = useState("")

    const {pathname} = useLocation()

    const id = +pathname.split("/").slice(-1)[0]

    console.log(id)

    const [tweetComment, { error, data, isLoading } ] = useTweetCommentMutation()

    const handleSubmit = e =>  {
        tweetComment({ "body": comment, "id": id })
    }

    const history = useHistory()
    const handleClick = id => e => history.push(`comment/${id}`)
    const { data : comments , isLoading: commentsLoading} = useTweetCommentsQuery(id)

    console.log(comments)
    //console.log(comments?.data)

    return(
        <>
            <div>
                <textarea value={comment} onChange={e => setComment(e.target.value)} ></textarea>
                <button onClick={handleSubmit}>submit</button>
            </div>
            <br />
           { commentsLoading ? <>loading...</> : comments?.title }
           <br />
           <div>
            { commentsLoading ? <>loading...</> : comments?.data.map(comment => {
                return (
                    <div 
                    key={comment.id} 
                    style={{padding: "0 20px", cursor: "pointer"}} 
                    onClick={handleClick(comment.id)}>{comment.body}</div>
                )
            }) }
           </div>
        </>
    )
}