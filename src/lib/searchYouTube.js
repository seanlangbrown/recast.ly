var searchYouTube = function (options, callback) {

  var url = 'https://www.googleapis.com/youtube/v3/search'; ///?q=' + this.state.searchText + '&maxResults=5&type=video&part=snippet&key=' + window.YOUTUBE_API_KEY + '&videoEmbeddable=true'; //'https://googleapis.com/youtube/v3/search';
  
  var data = {
    q: options.query || 'introduction to javascript',
    maxResults: options.max || 5,
    part: 'snippet',
    key: options.key || window.YOUTUBE_API_KEY,
    type: options.type || 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: url,
    type: 'GET',
    data: data,
    dataType: 'json',
    success: (data) => {
      callback(data.items);
    }
  });

};

window.searchYouTube = searchYouTube;
