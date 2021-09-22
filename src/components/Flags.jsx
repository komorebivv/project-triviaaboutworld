import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Api from "../constants/Api";
import Button from "./Button";

const Flags = () => {
    const [europe, setEurope] = useState([])
    const [europeButton, setEuropeButton] = useState(false)
    
    const [asia, setAsia] = useState([])
    const [asiaButton, setAsiaButton] = useState(false)
    
    const [americas, setAmericas] = useState([])
    const [americasButton, setAmericasButton] = useState(false)

    const [oceania, setOceania] = useState([])
    const [oceaniaButton, setOceaniaButton] = useState(false)

    const [africa, setAfrica] = useState([])
    const [africaButton, setAfricaButton] = useState(false)

    const [loading, setLoading] = useState(false)




        // useEffect(() => {
        // setLoading(true);
        // axios.get(Api.europeUrl)
        // .then((response) => {setEurope(response.data) && setLoading(false)}
        // )
        // .catch((error) => console.log(error))}
        //     );




    useEffect(() => {
        axios.get(Api.europeUrl)
        .then((response) => {setEurope(response.data)}
    )
        .catch((error) => console.log(error))}, []
      );

        

          
        useEffect(() => {
            axios.get(Api.asiaUrl)
            .then((response) => {setAsia(response.data)}
        )
            .catch((error) => console.log(error))}, []
          );

          useEffect(() => {
            axios.get(Api.oceaniaUrl)
            .then((response) => {setOceania(response.data)}
        )
            .catch((error) => console.log(error))}, []
          );

          useEffect(() => {
            axios.get(Api.africaUrl)
            .then((response) => {setAfrica(response.data)}
        )
            .catch((error) => console.log(error))},[]
          );

          useEffect(() => {
            axios.get(Api.americasUrl)
            .then((response) => {setAmericas(response.data)}
        )
            .catch((error) => console.log(error))},[]
          );

    



    return (
        <div className="container">
                    <h2>/ FLAGS</h2>

        <div className="buttons">
        <button className={europeButton ? 'btn country-btn' : 'btn'} onClick={() => setEuropeButton(!europeButton)}>Europe</button>
        <button className={asiaButton ? 'btn country-btn' : 'btn'} onClick={() => setAsiaButton(!asiaButton)}>Asia</button>
        <button className={oceaniaButton ? 'btn country-btn' : 'btn'} onClick={() => setOceaniaButton(!oceaniaButton)}>Oceania</button>
        <button className={americasButton ? 'btn country-btn' : 'btn'} onClick={() => setAmericasButton(!americasButton)}>Americas</button>
        <button className={africaButton ? 'btn country-btn' : 'btn'} onClick={() => setAfricaButton(!africaButton)}>Africa</button></div>
        <div className="countries">
        {europeButton && europe.map((country, countryIndex) => {let {name, flag, capital, population} = country;
        return <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <p>{country.population}</p>
         </div>}
    )}
        {asiaButton && asia.map((country, countryIndex) => {let {name, flag, capital, population} = country;
        return <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <p>{country.population}</p>
         </div>}
    )}
        {americasButton && americas.map((country, countryIndex) => {let {name, flag, capital, population} = country;
        return <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <p>{country.population}</p>
         </div>}
    )}
        {oceaniaButton && oceania.map((country, countryIndex) => {let {name, flag, capital, population} = country;
        return <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <p>{country.population}</p>
         </div>}
    )}
        {africaButton && africa.map((country, countryIndex) => {let {name, flag, capital, population} = country;
        return <div className="country"> 
        <img src={flag} alt="flag"></img>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <p>{country.population}</p>
         </div>}
    )}
        </div></div>)
}

export default Flags