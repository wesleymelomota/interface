import './button.css'

export default props => {
    return (
        <button onClick={props.Onclick} className='button'>{props.children}</button>
    )
}