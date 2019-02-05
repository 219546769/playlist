/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [ "Asap Forever","sicko Mode","3005",];
$('.songs').empty();
songs.forEach(function(songs) {
    console.log(songs);
    
});
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = [ "https://consequenceofsound.files.wordpress.com/2018/04/asap-rocky-asap-forever.jpg?quality=80",
"https://i.ytimg.com/vi/CRLe8ItXFHw/maxresdefault.jpg",
"https://images.genius.com/d3d7c55e142b8233760b93bf6a5bde01.746x431x1.jpg", ];
$('.images').empty();
images.forEach(function(images) {
    console.log(images);
});
var artists = ["ASAP Rocky","Travis Scott","Childish Gambino"];
$('.arist').empty();
artists.forEach(function(artists) {
    console.log(artists);
});
var songLenghts = ["4 min","5 min","4 min",];
$('.songLengths').empty();
songLenghts.forEach(function(songLengths) {
    console.log(songLengths);
});
var links = [
    "https://www.youtube.com/watch?v=BNzc6hG3yN4",
    "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
    "https://www.youtube.com/watch?v=tG35R8F2j8k",
    ];
$('.links').empty();
links.forEach(function(links) {
    console.log(links);
});
 


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function emptySongInfo(){
    $("#song").empty();
    $("#artist").empty();
    $("#length").empty();
    $("#link").empty();
    $("image").empty();
    // Use jQuery to empty all of the remaining divs


}


function displaySongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    images.forEach(function(image) {
        $("#image").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#song").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artist").append("<p> By: " + artist + "</p>");   
    });

    songLenghts.forEach(function(length) {
        $("#length").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#link").append("<a href='" + link + "'> Listen </a>"); 
    });

}

$("#add").click(function() {
    var song = $("#song").val();
    var image = $("#images").val();
    var artist = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(song);
    artists.push(artist);
    images.push(image);
    songLength.push(songLength);
    links.push(link);
    
    emptySongInfo();
    displaySongInfo();
});

displaySongInfo();
