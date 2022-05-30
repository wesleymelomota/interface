import './starred.css'
import {useSelector} from 'react-redux'
import RepoItem from '../comp-uteis/repository-item/RepoItem'

export default props => {
    const state = useSelector((state) => state.user.starred)
    function ItemStarred () {
        const itens = state.map((item) => <RepoItem key={item.id} name={item.name} 
            full_name={item.full_name}
            html_url={item.html_url}
        />) 
        return itens
    }
    return (
        <div className="stars">
            {ItemStarred()}
        </div>
    )
}
