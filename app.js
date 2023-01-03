let element = document.getElementById("demo");
const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition);
    }
}
const getPosition = (position) => {
    element.innerHTML = `${position.coords.latitude},${position.coords.longitude} <br> Copy above given number and just paste it on <a href="https://maps.google.com/" target="_blank">Google Map</a> search bar.`;

}
