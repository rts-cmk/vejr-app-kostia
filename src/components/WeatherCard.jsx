import "./WeatherCard.css"

export default function WeatherCard({ data }){
    if (!data) return <div className="card"><h2>byen ikke fundet</h2></div>

    return(
        <div className="card">
            <h2>{data.name}</h2>
            <p><span>Temp:</span> {Math.round(data.main.temp - 273.15)}°C</p>
            <p><span>Vejr:</span> {data.weather[0].main}</p>
        </div>
    )
}