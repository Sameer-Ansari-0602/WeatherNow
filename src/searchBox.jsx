import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let[error,setError] = useState(false);

    const api_key = "f5c4745c561befdba71faff9ae658f64";
    const api_url = "http://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async () =>{
        try{
        let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
        let jsonRes= await response.json();
        let result = {
            city : city,
            temp: jsonRes.main.temp,
            tempMin:jsonRes.main.temp_min,
            tempMax:jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    }

    let handleCityChange = (e) => {
        setCity(e.target.value);
        if (error) {
            setError(false);
        }
    };

    let handleSubmit = async (e)=>{
        try{
        e.preventDefault();
        console.log(city);
        let info = await getWeatherInfo();
        setCity("");
        setError(false);
        updateInfo(info);
        } catch(err){
            setError(true);
        }
    }

    return(
        <>
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCityChange}/>
                <br/><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p style={{color : "red"}}>No such Place found</p>}
        </div>
        
        </>
    )
}