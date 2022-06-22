import '../styles/ButtonBox.css'

const ButtonBox = ({children}: any): JSX.Element => {
    return (<div className='buttonBox'>
        {children}
    </div>)
}

export default ButtonBox;