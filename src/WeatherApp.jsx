import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo ,setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.8,
        tempMin: 25.8,
        tempMax: 25.8,
        humidity: 60,
        feelsLike: 25.8,
        weather: "clear",
    });

    let updateInfo = (res) =>{
        setWeatherInfo(res);
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
        </div>
        <SearchBox updateInfo={updateInfo}/>
        <br />
        <InfoBox info = {weatherInfo}/>
        </>
    )
}