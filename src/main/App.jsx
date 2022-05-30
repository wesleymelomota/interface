import './app.css'
import Layout from '../components/layout/Layout'
import Profile from '../components/profile/Profile'
import Repositorio from '../components/repos/Repositorio'
import {useSelector} from 'react-redux'
import NoSearch from '../components/nosearch/NoSearch'

function App(props) {
    const isUser = useSelector(state => state.user.isUser)
    return (
        <>
            <Layout>
                {isUser ? <>
                <Profile/>
                <Repositorio/>
                </> : <><NoSearch/></>
            }              
            </Layout>
            
        </>
        
      )
}

export default App