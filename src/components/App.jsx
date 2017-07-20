class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoIndex: 0
    }

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
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[this.state.currentVideoIndex]}/>
        </div>
        <div className="col-md-5">
          <VideoList eventHandler={this.handleClick} videos={exampleVideoData}/>
        </div>
      </div>
    </div>
  );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
