import  { apiSlice } from "./userslice"
import { tokenConfig } from "./userslice"

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        getTweets : builder.query({
            query: () => ({
                url: "tweets/",
                method: "GET",
                headers: tokenConfig().headers,
            })
        }),
        getTweet : builder.query({
            query: id => ({
                url: `tweet/${id}/`,
                method: "GET",
                headers: tokenConfig().headers,
            })
        }),
        tweetComments : builder.query({
            query: id => ({
                url: `replytweet/${id}/`,
                method: "GET",
                headers: tokenConfig().headers,
            })
        }),
        tweetComment : builder.mutation({
            query: (data) => ({
                url: `replytweet/${data.id}/`,
                method: "POST",
                body: data,
                headers: tokenConfig().headers,
            })
        }),
        retweet : builder.mutation({
            query: id => ({
                url: `tweets/post/retweet/`,
                method: "POST",
                body: id
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }){
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getTweets",undefined, draft => {
                        const tweet = draft.find(tweet => tweet.id === id)
                        if(tweet){

                        }
                    } )
                )
                try{
                    await queryFulfilled
                }catch{
                    patchResult.undo()
                }
            },
        })
    })
})


export const { 
    useGetTweetsQuery,
    useGetTweetQuery,
    useTweetCommentsQuery,
    useTweetCommentMutation
 } =  extendedApiSlice