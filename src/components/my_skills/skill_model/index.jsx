import {
    SkillStyles,
    SkillIcon,
    SkillTitle,
    SkillDescription
} from './style'

const Skill = ({title, icon, description}) => {
    return(
        <>
            <SkillStyles>
                <SkillIcon src={icon}/>
                <SkillTitle>{title}</SkillTitle>
                <SkillDescription>{description}</SkillDescription>
            </SkillStyles>
        </>
    )
}

export default Skill