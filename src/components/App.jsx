class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: 'intro to js',
      videos: [],
      selectedVideo: {}
    };
    console.log('state after in app: ', this.state.videos, this.state.selectedVideo);
  }

  search() {
    var cb = (data) => {
      console.log('data in callback ', data);
      console.log('state before: ', this.state.videos, this.state.selectedVideo);
      this.setState({
        videos: data,
        selectedVideo: data[0] 
      });
      console.log('state after in cb: ', this.state.videos, this.state.selectedVideo);
    };
    this.props.searchYouTube({query: this.state.searchText}, cb);
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

  componentDidMount() {
    this.search();
  }

  render() {
    if (this.state.videos.length) {
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
    } else {
      return (
        <div className="loading">
          <h3>Loading content ... </h3>
        </div>
      );
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
