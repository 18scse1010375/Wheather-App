const getWheather=(city)=>
{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '734a7f8993mshfd4c5256578d4dcp1b71ecjsn285de0191fe3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city} `, options)
	.then(response => response.json())
	.then(response => {  
        console.log(`Temperature of ${city} `)
        general.innerHTML=city
        
        console.log(response)
       
        cloud.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        feels.innerHTML=response.feels_like
        humidity=response.humidity ;
        minTemp.innerHTML=response.min_temp ;
        maxTemp.innerHTML=response.max_temp
        windSpeed.innerHTML=response.wind_speed
        windDegree.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
    }

 )

.catch(err => console.error(err));
}



const pressSearch=()=>{
    let p1=document.getElementById("search").value 
    console.log(p1);
    getWheather(p1);

}

