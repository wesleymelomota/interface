import { Children } from 'react'
import './layout.css'
import Header from '../header/Header'

function Layout(props) {
    return (
        <div className="container-layout">
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout