import Button from '../comp-uteis/Button'
import './repos.css'
import RepoItem from '../comp-uteis/repository-item/RepoItem'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import Starred from './Starred'

function Repositorio(props){
    const state = useSelector((state) => state.user.repos)
    function ItemRepo () {
        const itens = state.map((item) => <RepoItem kei={item.id} name={item.name} 
            full_name={item.full_name}
            html_url={item.html_url}
        />) 
        return itens
    }

    const [UserRepor, setRepo] = useState()
    
    return(
        <div className="container-repos">
            <div className="bottons">
                <Button Onclick={() => setRepo(ItemRepo)}>Repositorio</Button>
                <Button Onclick={() => setRepo(<Starred/>)}>Starred</Button>
                
            </div>
            <div className="items-container">
                    {UserRepor}
            </div>
            
        </div>
    )
}

export default Repositorio