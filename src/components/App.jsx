class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoIndex: 0,
      videos: exampleVideoData,
      options: {
        query: 'dogs',
        max: 5,
        key: `${YOUTUBE_API_KEY}`
      }
    };

    // `this` binding is set to App instance to access setState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newIndex) {
    newIndex = newIndex || 0;
    this.setState({
      currentVideoIndex: newIndex
    });
  }

  render () {
    console.log(searchYouTube)
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler={searchYouTube} appState = {this.state}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.videos[this.state.currentVideoIndex]}/>
        </div>
        <div className="col-md-5">
          <VideoList eventHandler={this.handleClick} videos={this.state.videos}/>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
