import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default axios.create({
    baseURL: 'http://localhost:9101'
});
/*

//추가 API
export const api = hrApi({
    // reducerPath: "api"
    reducerPath: "hrApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9104" }),
    tagTypes: ["Count"],
    endpoints: (builder) => ({
        getCount: builder.query({
            query: ({ name }) => `count/${name}`,
            providesTags: (result, error, arg) => {
                console.log(result, error, arg);
                return [{ type: "Count", id: arg.name }];
            }
        }),
        setCount: builder.mutation({
            query: ({ name, value }) => {
                return {
                    url: `count/${name}`,
                    method: "POST",
                    body: { value }
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: "Count", id: arg.name }]
        })
    })
});*/
