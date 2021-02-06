import {
    MyPictureStyles
} from './style'
import myImage from './my_image.jpg'

const MyPicture = () => {
    return (
        <>
            <MyPictureStyles alt={'My picture.'} src={myImage}/>
        </>
    )
}

export default MyPicture