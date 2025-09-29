export default function WeatherCard({ data }){
    if (!data) return <p>error</p>

    return(
        <div>
            <h2>{data.name}</h2>
            <p>Temp: {Math.round(data.main.temp - 273.15)}°C</p>
        </div>
    )
}