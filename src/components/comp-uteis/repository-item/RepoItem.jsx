import './style.css'

export default (props) => {
    
    return (
        <div  className="repos">
            <h1>{props.name}</h1>
            <h5>{props.full_name}:</h5>
            <a href={props.html_url} target="_blank" rel="noreferrer">
                {props.full_name}
            </a>
        </div>
    )
}