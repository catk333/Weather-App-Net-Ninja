const key = 'HIAz2YIwHaOAecIbdU6J6M7Cpml3aq26'; 

getWeather = async(id) => {
 const base= 'http://dataservice.accuweather.com/currentconditions/v1/';
 const query = `${id}?apikey=${key}`

 const weatherResponse = await fetch( base + query);
 const data = await weatherResponse.json(); 

return data[0];


}
const getCity = async(city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;
  
  const response = await fetch(base + query);
  const data = await response.json(); 

  return data[0];
}; 

//call the methods we have declared above. 
getCity('London')
.then(data => { 
  return getWeather(data.Key)})
  .then(data => {
    console.log(data);
  })
  .catch(console.log(err => console.log(err)))

getWeather();