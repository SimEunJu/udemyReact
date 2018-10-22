import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video-list';
import VideoDetail from '.components/video_detail';

const API_KEY = 'AIzaSyDTSkKaCkdaaHg1GHVXLrVUorON Lv7jtOM';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('cat');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo = videos[0]
      });
    });

  }
  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          {this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.querySelector('.container'));
