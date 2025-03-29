const apikey = "c34e3f0c8afe1540236dccc90df2a20c";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data = await response.json();
    }
    
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="images/clouds.png";
    }else if(data.weather[0].main=="clear"){
        weatherIcon.src ="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="images/mist.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src ="images/snow.png";
    }

    document.querySelector(".error").style.display ="none";
    document.querySelector(".weather").style.display ="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
