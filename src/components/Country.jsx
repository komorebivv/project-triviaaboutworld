const Country = ({ flag, name, capital, population }) => {
    return (
        <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{name}</h4>
        <p>{capital}</p>
        <p>{population}</p>
         </div>
    )
}

export default Country