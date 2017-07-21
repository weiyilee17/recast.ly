var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
  url: `https://www.googleapis.com/youtube/v3/search?q=${options.query}&maxResults=${options.max}&key=${options.key}&part=snippet`,
  type: 'GET',
  // data: data,
  // dataType:
  success: function (data) {
    console.log("SUCCESS!", data.items);

    data.items.forEach(function (item) {
      item.id.videoId = item.id.channelId;
      delete item.id.channelId;
    })

    callback(data.items);
  },
  error: function (e) {
    console.log("ERROR!", e)
  }
});
};

window.searchYouTube = searchYouTube;
/*
https://www.googleapis.com/youtube/v3/search?q=cats&maxResults=10&key=AIzaSyDESCM6sA0dD0Whi_Pfm-k12bYplP1B9w4&part=snippet

https://developers.google.com/youtube/v3/docs/search/list


To search for YouTube videos, you'll use the API's Search:list endpoint. To help keep your code organized,
write a helper function that is solely responsible for interacting with this endpoint.
In lib/searchYouTube.js fill out the searchYouTube function. It should:

Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
Accept an options object with the following properties:
query - the string to search for
max - the maximum number of videos to get, which should default to 5
key - an authorized YouTube Browser API key
Only GET embeddable videos
Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
*/
