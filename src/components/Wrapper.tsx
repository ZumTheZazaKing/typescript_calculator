import '../styles/Wrapper.css';

const Wrapper = ({children}: any): JSX.Element => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;