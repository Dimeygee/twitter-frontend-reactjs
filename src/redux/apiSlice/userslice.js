

import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:8000/",
    }),
    tagTypes: ["User"],
    endpoints: builder => ({
        loadUser: builder.query({
            query: () => ({
                url: "auth/users/me/",
                method: "GET",
                headers: tokenConfig().headers,
              }),
            //providesTags: (result, error) => result ? ["User"] : error ? ["UNAUTHORIZED"] : ["UNKNOWN_ERROR"]
        }),
        userProfile: builder.query({
            query: username => ({
                url:`user/${username}`,
                method: "GET",
                headers: tokenConfig().headers,
              }),
        }),
        registerUser: builder.mutation({
            query: initialdata => ({
                url: "auth/users/",
                method: "POST",
                body: initialdata
            })
        }),
        loginUser: builder.mutation({
            query: initialdata => ({
                url: "auth/jwt/create/",
                method: "POST",
                body: initialdata
            }),
           //invalidatesTags : (result) => result ? ["UNKNOWN_ERROR"] : ""
           //invalidatesTags : (result) => result ? ["UNAUTHORIZED" || "UNKNOWN_ERROR"] : ""
        }),
    })
})

export const UserSelector = apiSlice.endpoints.loadUser.select()

export const tokenConfig = () => {
    const token = localStorage.getItem("access");
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    return config;
  };

export const { 
    useLoadUserQuery, 
    useUserProfileQuery ,
    useRegisterUserMutation, 
    useLoginUserMutation 
}  = apiSlice
