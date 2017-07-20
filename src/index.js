// TODO: Render the `App` component to the DOM
// var App = () => (
//   <div>
//     <VideoList vlist = {exampleVideoData.slice(0,3)}/>
//   </div>
// );
//
//
// var VideoList = (props) => (
//   <div>
//     {props.vlist.map( (video, index) => <VideoListEntry video={video} key={index} />)}
//   </div>
// );
//
//
// var VideoListEntry = (props) => (
//   <div>
//     {props.video.snippet.title}
//   </div>
// );
//

ReactDOM.render(<App />, document.getElementById('app'));
