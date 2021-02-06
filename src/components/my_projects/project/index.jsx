import LinkedIcon from './link'
import {
    ProjectStyles
} from './style'
import gitHub from '../../../assets/icons/github.png'
import vercel from '../../../assets/icons/vercel.png'

const Project = ({title, description, repositoryURL, deployURL}) => {
    return(
        <>
            <ProjectStyles>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <LinkedIcon icon={gitHub} linkText={'Repository'} URL={repositoryURL}/>
                <LinkedIcon icon={vercel} linkText={'Visit Website'} URL={deployURL}/>
            </ProjectStyles>
        </>
    )
}

export default Project