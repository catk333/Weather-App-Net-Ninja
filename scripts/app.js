const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
 const icon = document.querySelector('img.icon');

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather; 
  //update details template

  details.innerHTML = 
      `<h5 class= "my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>

  </div>
  `;

let timeSrc = null;
 if (weather.isDayTime){
   timeSrc ='img/night.svg';

}else{
  timeSrc='img/day.svg';
}; 
 time.setAttribute('src',timeSrc); 

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};





const updateCity = async (city) =>{
  // wait until er get this value , into an object about the city. 
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

    return {
    cityDets,
    weather 
    };
}


cityForm.addEventListener('submit', e => {
// doesnt refresh the page
  e.preventDefault()
// get rid of whitespace
// thing that user types in. 
  const city = cityForm.city.value.trim();
  //can add new city 
  cityForm.reset();

  updateCity(city)
  .then(data => updateUI(data))
  .catch( err => console.log(err))
});

// attaching a listener to the form
//adding the value to the function for get city

//steps 1. Here a  submit event, prevent default amd get the city value. 
// 2. reset the Form, and update the value with the city they type in, in UpdateCity function. 
//3. work through the function to get the cityDets and then use to access the key. 
//4. Weather object, gets returned with two properties that ONCE THE PROMISE HAS RETURNED  
//get passed into the updateCity function and data is logged out.  
