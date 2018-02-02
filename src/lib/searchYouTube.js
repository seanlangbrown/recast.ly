var searchYouTube = function (options, callback) {
  
  console.log('searchYouTube.js');
  var url = 'https://www.googleapis.com/youtube/v3/search'; ///?q=' + this.state.searchText + '&maxResults=5&type=video&part=snippet&key=' + window.YOUTUBE_API_KEY + '&videoEmbeddable=true'; //'https://googleapis.com/youtube/v3/search';
  console.log('options arguments to searchYT ', options);  

  var dataOptions = {
    q: options.query || 'js callback',
    maxResults: options.max || 20,
    part: 'snippet',
    key: options.key || window.YOUTUBE_API_KEY,
    type: options.type || 'video',
    videoEmbeddable: 'true'
  };
  
  console.log('GET request options: ', dataOptions);

  $.ajax({
    url: url,
    type: 'GET',
    data: dataOptions,
    dataType: 'json',
    success: (data) => {
      //console.log('data in searchYouTube ', data.items);
      callback(data.items);
    }
  });

};

window.searchYouTube = searchYouTube;
