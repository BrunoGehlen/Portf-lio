import {
    MyProjectsStyles
} from './style'
import Project from './project'

const MyProjects = () => {
    return(
        <>
            <MyProjectsStyles>
                <Project 
                    title={'Kenzie Hub'} 
                    description={'A social network for Kenzie studants!'} 
                    repositoryURL={'https://github.com/'} 
                    deployURL={'https://github.com/'}
                />
                <Project 
                    title={'Mato'} 
                    description={'A camping trip planner!'} 
                    repositoryURL={'https://github.com/'} 
                    deployURL={'https://github.com/'}
                />
                <Project 
                    title={'Lig-4'} 
                    description={'Play the classic lig-4 game!'} 
                    repositoryURL={'https://github.com/'} 
                    deployURL={'https://github.com/'}
                />
            </MyProjectsStyles>
        </>
    )
}

export default MyProjects