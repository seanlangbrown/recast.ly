class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: '',
      videos: window.exampleVideoData,
      selectedVideo: window.exampleVideoData[0]
    };
  }
  search() {
    alert(this.state.searchText);
    var url = 'https://www.googleapis.com/youtube/v3/search'; ///?q=' + this.state.searchText + '&maxResults=5&type=video&part=snippet&key=' + window.YOUTUBE_API_KEY + '&videoEmbeddable=true'; //'https://googleapis.com/youtube/v3/search';
    
    var data = {
      q: this.state.searchText,
      maxResults: 5,
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: 'true'
    };

    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      dataType: 'json',
      success: (data) => {
        console.log(data);
      }
    });

    /*
    var data = {
      method: 'GET',
      headers: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: this.state.searchText,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
    };
    //window.YOUTUBE_API_KEY
    fetch(url, data).then((response)=> (
      console.log(response)
    ));
    */

  }

  searchInputUpdate(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  //select
  selectVideo(selection) {
    this.setState({
      selectedVideo: selection
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.search.bind(this)} onInputUpdate={this.searchInputUpdate.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onSelect={this.selectVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
