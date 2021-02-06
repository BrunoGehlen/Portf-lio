import Bubbles from './Bubbles'
import DownloadResume from './download_resume'
import MyPicture from './my_picture'
import {
    MyInfoStyles
} from './style'

const MyInfo = () => {
    return (
        <>
        <MyInfoStyles>
            <MyPicture/>
            <h1>BrunoGehlen</h1>
            <h2>Front-end Developer And Full-stack Studant at Kenzie Academy</h2>
            <DownloadResume/>
            <Bubbles/>
        </MyInfoStyles>
        </>

    )
}

export default MyInfo