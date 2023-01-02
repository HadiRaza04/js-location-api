const element = document.getElementById("demo");
const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition);
    }
    else{
        element.innerHTML = "Location not supported";
    }   
}
const getPosition = (position) => {
    element.innerHTML = `Latitude is: ${position.coords.latitude} <br> Longitude is: ${position.coords.longitude}`;
}