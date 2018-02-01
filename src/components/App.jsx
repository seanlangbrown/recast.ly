class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: 'Loading content ...',
      searchText: 'intro to js',
      videos: [],
      selectedVideo: {}
    };
    
    this.debouncedSearch = _.debounce(function(options, callback) {
      this.props.searchYouTube(options, callback);
    }, 500);

    //console.log('state after in app: ', this.state.videos, this.state.selectedVideo);
  }

  search(queryText, initial) {
    var cb = (data) => {
      //console.log('data in callback ', data);
      //console.log('state before: ', this.state.videos, this.state.selectedVideo);
      if (data.length > 0) {
        this.setState({
          error: null,
          videos: data,
          selectedVideo: data[0] 
        });
      } else {
        this.setState({
          error: 'No Search Results :(',
          videos: [],
          selectedVideo: {}
        });
      }
      //console.log('state after in cb: ', this.state.videos, this.state.selectedVideo);
    };
    if (initial) {
      this.props.searchYouTube({query: queryText}, cb);
    } else {
      this.debouncedSearch({query: queryText}, cb);
    }
  }

  


  searchInputUpdate(e) {
    this.search(e.target.value, false);
  }

  selectVideo(selection) {
    this.setState({
      selectedVideo: selection
    });
  }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.videos.length === 0 || nextState.searchText !== this.state.searchText;
  }
  
  componentDidUpdate() {
    console.log('state queryText before search: ', this.state.searchText);
    this.search();
  }
  */

  componentDidMount() {
    //console.log('componentDidMount Search', + this.state.searchText);
    this.search('intro to js', true);
  }

  render() {
    if (true || this.state.videos.length) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search onSearch={this.search.bind(this)} onInputUpdate={this.searchInputUpdate.bind(this)} />
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.selectedVideo} errorMessage={this.state.error ? this.state.error : 'Loading Content ...'}/>
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
