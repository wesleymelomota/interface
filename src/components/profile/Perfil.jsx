import './perfil.css'
//import {connect} from 'react-redux'
//import Api from '../../services/Api'
import { useState } from 'react'
import {useSelector} from 'react-redux'

import Img from '../Img'


function Perfil(props){
    const { login, name, blog, html_url, company, location, public_repos, public_gists, followers, following, avatar_url} = useSelector((state) => state.user.perfil)
    
    return (
        <div className="main-perfil">
            <Img>
                <img src={avatar_url} alt="avatar user"/>
            </Img>
            <div className='container-perfil'>
                <div>
                    <h1>{name}</h1>
                    <span>UserName: <a href={html_url}>{login}</a></span><br/>
                    <h4>Company</h4>
                    <label>{company}</label>
                    <h4>Location: {location}</h4>              
                    <span>Blog: <a href={blog}>{login}</a></span> 
                </div>
                <div className="container-fallow">
                    <span>Followers: {followers}</span>
                    <span>Followings: {following}</span>
                    <span>Gits: {public_gists}</span>                
                    <span>Repos: {public_repos}</span>              
                </div>           
            </div>
            
        </div>
    )
}
export default Perfil
