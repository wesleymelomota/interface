import Api from '../../services/Api'
import {useDispatch} from 'react-redux'
import { getRepos, getStarred } from '../../storeConfig/UserSlice'



function GetGitHub(nome){
    const dispatch = useDispatch()
    
    async function getNome(nome) {
        const data = await Api.get(`users/${nome}`).then(({data}) => data)
        return data
    }
    async function GetRepos(nome) {
        const data = await Api.get(`users/${nome}/repos`).then(({data}) => data)
        dispatch(getRepos(data))
        
    }
    async function GetStarred(nome) {
        const data = await Api.get(`users/${nome}/starred`).then(({data}) => data)
        console.log(`getGitHub ${data}`)
        dispatch(getStarred(data))
        
    }
    
    return { getNome, GetRepos, GetStarred}
}

export default GetGitHub