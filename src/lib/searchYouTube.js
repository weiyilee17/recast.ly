var searchYouTube = (options, callback) => {
  // TODO
  let _input = $('.form-control').val();
  _input = _input || '';
  options.query = _input.length > 0 ? _input : options.query;

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?q=${options.query}&maxResults=${options.max}&key=${options.key}&part=snippet`,
    type: 'GET',
    success: function (data) {
      // console.log("SUCCESS!", data.items);

      data.items.forEach(function (item) {
        item.id.videoId = item.id.channelId || item.id.videoId;
        delete item.id.channelId;
      });

      callback(data.items);
    },
    error: function (e) {
      console.log('ERROR!', e);
    }
  });
};

window.searchYouTube = searchYouTube;
