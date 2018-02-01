var Search = (props) => {
  var handleSearchClick = function () {
    props.onSearch($('.form-control').val());
    $('.form-control').val('');
  };
 
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={e => props.onInputUpdate(e)} />
      <button className="btn hidden-sm-down" onClick={handleSearchClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
