import React from 'react'

const TempCard = ({ tempInfo }) => {
    const [weatherState, setweatherState] = React.useState("");

    const {
        temp, humidity, pressure, weathermood, cityname, country, sunset, speed
    } = tempInfo;

    // Converting seconds into time
    let sec = sunset;
    let time = new Date(sec * 1000);
    let timeStr = `${time.getHours()}:${time.getMinutes()}`;

    React.useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setweatherState("wi-day-cloudy")
                    break;
                case "Sunny": setweatherState("wi-day-sunny")
                    break;
                case "Clear": setweatherState("wi-solar-eclipse")
                    break;
                case "Haze": setweatherState("wi-day-haze")
                    break;
                case "Smoke": setweatherState("wi-day-fog")
                    break;
                case "Mist": setweatherState("wi-dust")
                    break;
                    case "Rain": setweatherState("wi-rain")
                    break;

                default: setweatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weathermood])

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>{cityname}, {country}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>

                {/* Our 4 Divided Section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className='wi wi-sunset'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className='wi wi-day-rain'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className='wi wi-strong-wind'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TempCard