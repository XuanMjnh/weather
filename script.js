const search = document.getElementById('inputSearch');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const tempertature = document.querySelector('.temperature');
const vision = document.querySelector('.vision');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const body = document.querySelector('body');
const container = document.querySelector('.container');
async function changeWeather() {
    let capitalValue = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=85f00902383fd3c155e094abd5f86a2c`

    let data = await fetch(apiURL).then(res => res.json())
    if(data.cod == 200) {
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        vision.innerText = data.visibility +'m'
        wind.innerText = data.wind.speed +'m/s'
        humidity.innerText = data.main.humidity + '%'
        tempertature.innerHTML = parseInt(data.main.temp-273.15) + '&degC';
        let t =  parseInt(data.main.temp-273.15);
        if(t < 20) {
            body.classList.add('winter');
            container.classList.add('winter');

            body.classList.remove('summer');
            container.classList.remove('summer');

            body.classList.remove('spring');
            container.classList.remove('spring');

        } 
        else if(t > 30) {
            body.classList.add('summer');
            container.classList.add('summer');

            body.classList.remove('winter');
            container.classList.remove('winter');

            body.classList.remove('spring');
            container.classList.remove('spring');
        }
        else {
            body.classList.add('spring');
            container.classList.add('spring');

            body.classList.remove('summer');
            container.classList.remove('summer');

            body.classList.remove('winter');
            container.classList.remove('winter');

        }
    }
}

changeWeather();

search.addEventListener('keypress', e => {
    if(e.code === 'Enter') {
        changeWeather();
    }
})