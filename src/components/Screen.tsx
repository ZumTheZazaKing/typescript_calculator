import { Textfit } from 'react-textfit';
import '../styles/Screen.css'

const Screen = ({value}: any) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    )
}

export default Screen;