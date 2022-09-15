// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=b067696e6cb4332ca2fe96c633eb2ebe

import React, { useState, useEffect } from 'react'
import TempCard from './tempCard'
import "./style.css"

const Temp = () => {
    const [searchValue, setSearchValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=b067696e6cb4332ca2fe96c633eb2ebe&units=metric`
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);

            const {temp, humidity, pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name: cityname} = data;
            const {country, sunset} = data.sys;
            const {speed} = data.wind;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, cityname, country, sunset, speed
            }
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='search...' autoFocus id='search' className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            {/* Our Temp Card */}
            <TempCard tempInfo={tempInfo} />
        </>
    )
}

export default Temp