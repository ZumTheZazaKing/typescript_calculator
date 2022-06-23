import { Textfit } from 'react-textfit';
import '../styles/Screen.css'

type ScreenProp = {value: string}

const Screen = ({value}: ScreenProp) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    )
}

export default Screen;