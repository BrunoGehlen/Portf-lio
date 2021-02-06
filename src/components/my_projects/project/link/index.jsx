import {
    LinkedIconStyles
} from './style'

const LinkedIcon = ({URL, icon, linkText}) => {
    return(
        <>
        <a href={URL}><LinkedIconStyles >
            <img alt={'Link icon.'} src={icon}/>
            <h3>{linkText}</h3>
        </LinkedIconStyles></a>
        </>
    )
}

export default LinkedIcon