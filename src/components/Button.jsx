const Button = ({styleButton}) => {
    return (
        <button className={styleButton}></button>
    )
}

Button.defaultProps = {
    styleButton: 'btn'
}

export default Button;