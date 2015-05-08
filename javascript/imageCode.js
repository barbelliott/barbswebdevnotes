var nowIndex = 0; // Create a variable to hold the current index and set it to 0

function changeImage() {
    
    var listOfImages = [
        "images/oil/thumbs/artwork_1.jpg",
        "images/oil/thumbs/artwork_2.jpg",
        "images/oil/thumbs/artwork_3.jpg",
        "images/oil/thumbs/artwork_4.jpg",
        "images/oil/thumbs/artwork_5.jpg",
        "images/oil/thumbs/artwork_6.jpg",
        "images/oil/thumbs/artwork_7.jpg",
        "images/oil/thumbs/artwork_8.jpg"];

    var imageObject = document.getElementById("placeholder"); // get the image DOM object from the html page

    if (nowIndex < 7) { //if the last index was not the one for at the last item in the array...
        nowIndex++;   //add 1 to the previous index
    }
    
    else { //if the last index *was* the one for at the last item in the array... 
        nowIndex = 0;} //reset the index back to 0
    
    imageObject.src = listOfImages[nowIndex]; //look at the list and grab the contents of the one with the index of the current value of nowIndex and replace the current src with the new one.
}