import './profile.css'
import Perfil from './Perfil'

{/*import Api from '../../githubapi/Api'

Api.get('users/wesleymelomota')
.then(({data}) => console.log(data.login))*/}

function Profile(props) {
    return (
        <div className="container-profile">
            
            <Perfil/>
            
        </div>
    )
}

export default Profile