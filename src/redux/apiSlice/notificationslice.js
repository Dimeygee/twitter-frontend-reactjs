import { apiSlice } from "./userslice";


export const notificationSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        getNotifications : builder.query({
            query: () => "notify/notification_list/",
            async onCacheEntryAdded(
                arg,
                { updateCachedData,cacheDataLoaded, cacheEntryRemoved }
            ){
                
            }
        }) 
    })
})
