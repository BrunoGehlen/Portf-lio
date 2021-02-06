import Skill from './skill_model'
import {
    MySkillStyled 
} from './style'
import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import styledComponents from '../../assets/icons/styled-components.png'
import javaScript from '../../assets/icons/javascript.png'
import libs from '../../assets/icons/libs.png'
import python from '../../assets/icons/python.png'
import yarn from '../../assets/icons/yarn.png'

const MySkills = () => {
    return(
        <>
            <MySkillStyled>
                <Skill
                    icon={javaScript}
                    title={'JavaScript'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={react}
                    title={'React'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={redux}
                    title={'Redux'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={styledComponents}
                    title={'Styled Components'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={libs}
                    title={'React Libraries'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={yarn}
                    title={'Yarn'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
                <Skill
                    icon={python}
                    title={'Python'}
                    description={'React is an open-source, front end, JavaScript library developed by Facebook for building user interfaces or UI components.'}
                />
            </MySkillStyled>
        </>
    )
}

export default MySkills