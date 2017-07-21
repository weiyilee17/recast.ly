var Search = (props) => {

  // buttonClick(){
  //   this.setState({
  //     videos: props.appState.options.query;
  //   });
  // }


   return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button onClick={ () =>
        props.searchHandler(props.appState.options, function(videos) {
          // props.appState.videos = videos

          this.setState({
            videos: videos
          })
        })
      } className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
      </button>
      </div>
    );
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
