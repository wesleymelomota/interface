import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
    name: 'user',
    initialState: {
        perfil: {
        "login": "",
          "id": "",
          "avatar_url": "",
          "url": "",
          "html_url": "",
          "gists_url": "",
          "starred_url": "",
          "repos_url": "",
          "name": undefined,
          "company": undefined,
          "blog": "",
          "location": undefined,
          "public_repos": 0,
          "public_gists": 0,
          "followers": 0,
          "following": 0,},
          repos: [],
          starred: [],
          isUser: false
          
    },
    reducers: {
        getUser(state,{payload}){
            
            return {...state,  perfil: payload, isUser: true }
        },
        getRepos(state, {payload}){
            return {...state, repos: payload}
        },
        getStarred(state, {payload}){
            return {...state, starred: payload}
        }
    }
})

export const { getUser, getRepos, getStarred } = slice.actions
export default slice.reducer