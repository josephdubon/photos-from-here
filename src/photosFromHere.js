// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Start test for the presence of geolocation
// if ('geolocation' in navigator) {
//     /* geolocation is available */
//     console.log("Yes")
// } else {
//     /* geolocation IS NOT available */
//     console.log("No")
// }
// End Test

// Next image button
const nextButton = document.getElementById("nextButton")
nextButton.addEventListener('click', nextImage)

// third to run
let options = {
    enableHighAccuracy: true,
    maximumAge: 0
}

// If user denies location permission
const fallbackLocation = {
    latitude: 39.5078,
    longitude: -119.8301
}

// Build the image source URL for the first image
// Function borrowed from Randy Cox. Thank you, Randy.
function constructImageURL(photoObj) {
    return "https://farm" + photoObj.farm +
        ".staticflickr.com/" + photoObj.server +
        "/" + photoObj.id + "_" + photoObj.secret + ".jpg"
}

// First to run
function showImages(dataObj) {
    let imageCollection = dataObj.photos.photo
    let imageSource = constructImageURL(imageCollection[0])
    let currentImage = document.createElement("img")
    currentImage.src = imageSource
    document.getElementById("photoContainer").appendChild(currentImage)
}

function nextImage() {
    console.log("Next Image.")
}

function processResponse(response) {
    let dataPromise = response.json()
    dataPromise.then(showImages)
}

function getImages(coords) {
    console.log("Lat: " + coords.latitude)
    console.log("Lon: " + coords.longitude)
    // Proxy borrowed from Randy Cox.
    const url = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=2a96b784d0ba4e0c0a78883ca2895246&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=" + coords.latitude + "&lon=" + coords.longitude + "&text=35mm"

    let fetchPromise = fetch(url)
    fetchPromise.then(processResponse)
}

// Show real location
function enableRealLocation(pos) {
    getImages(pos.coords)
}

// Second to run
function enableFallbackLocation(err) {
    getImages(enableFallbackLocation)
}

// Get the current location
navigator.geolocation.getCurrentPosition(enableRealLocation, enableFallbackLocation, options)