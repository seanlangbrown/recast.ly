class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: 'intro to javascript',
      videos: [],
      selectedVideo: {}
    };
    this.search();
  }

  search() {
    var cb = (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0] 
      });
    };
    this.props.searchYouTube({query: this.props.searchText}, cb);
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
