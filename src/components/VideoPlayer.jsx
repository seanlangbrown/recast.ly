var VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        {props.video.id !== undefined ? (
          <iframe className="embed-responsive-item" src={props.video.id ? 'https://www.youtube.com/embed/' + props.video.id.videoId : ''} allowFullScreen></iframe>
        ) : (
          <div>
            <h4>{props.errorMessage}</h4>
          </div>
        )}
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet !== undefined ? props.video.snippet.title : ''}</h3>
        <div>{props.video.snippet !== undefined ? props.video.snippet.description : ''}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
