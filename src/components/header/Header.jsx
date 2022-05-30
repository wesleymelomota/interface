import './header.css'
import {useDispatch} from 'react-redux'
import { getUser } from '../../storeConfig/UserSlice'
import {useState} from 'react'
import Api from '../../services/Api'
import GetGitHub from '../scripts/getGitHub'

export default (props) => {
    
    const {GetStarred, GetRepos} = GetGitHub()
    const [userNome, setNome] = useState()
    const dispatch = useDispatch()
    const search = () => {
        if(!userNome) return;
        Api.get(`users/${userNome}`)
            .then(({data}) => dispatch(getUser(data)))
        GetRepos(userNome)
        GetStarred(userNome)
    }

    return (
        <header className="header">
            <input className="input" type="text"  onChange={(e) => setNome(e.target.value)} placeholder='Digite o nome de usuario...'/>
            <button className='btn' onClick={search} type='search'>Pesquisar</button>
        </header>
    )
}