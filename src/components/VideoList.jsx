var VideoList = (props) => {
  var handlePrevPage = function() {
    props.onPageTurn(false);
  };

  var handleNextPage = function() {
    props.onPageTurn(true);
  };
  return (
    <div className="video-list">
      {props.videos[props.page].map(video => <VideoListEntry video={video} onSelect={props.onSelect} />)}
      <span class="nav">
        {props.page > 0 ? <button id="lastpage" onClick={handlePrevPage} >previous</button> : null}
        {props.page < props.pages ? <button id="nextpage" onClick={handleNextPage} >next</button> : null}
      </span>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
