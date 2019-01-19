$(document).ready(function () {
    //api key   1oCQca09d4CBXwjvRpGZes9TEFKFoC0j
    //example API request "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&rating=g&api_key=YOUR_API_KEY&limit=5"


    var topics = ["hedgehog", "elephant", "platypus", "dog", "cat", "kangaroo"];

    renderTopics();
    //put this inside an event listener callback function




    //event listener for topics to pull in Gifs
    /*$("#topics").on("click", ".topic", function () {
        //blank out gifs div
        
        var topic = $(this).attr("data-topic");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&api_key=1oCQca09d4CBXwjvRpGZes9TEFKFoC0j&limit=10";

        $.ajax(
            url: queryURL,
            method: "GET"
        ).then(function (response) {
            //append new gifs

        });//end ajax request

    });
    */




    /////////////////// FUNCTIONS   //////////////////////////////
    function renderTopics() {
        topics.forEach(function (topic) {

            var btn = $("<button class='btn btn-primary topic'>").text(topic).attr("data-topic", topic);
            $("#topics").append(btn);
        });
    }

});