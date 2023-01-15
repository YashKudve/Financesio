import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({baseUrl: baseURI}),
    endpoints : builder =>({

        //get categories
        getCategories: builder.query({
            query:() => './api/categories',
            providesTags:['categories']
        }),

        //get labels
        getLabels : builder.query({
            query: () => 'api/labels',
            providesTags:['transaction']
        }),

        // add new reansaction
        //getting data from database use 'query' function ;  And for update, delete use "mutation" function
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
              url: '/api/transaction',
              method: "POST",
               body: initialTransaction
            }),

            invalidatesTags:['transaction']
        }),

        //Delete Transaction

        deleteTransaction: builder.mutation({
            query: recordId => ({
                url:'/api/transaction',
                method:"DELETE",
                body:recordId
            }),

            invalidatesTags:['transaction']
        })



    })
})

export default apiSlice;