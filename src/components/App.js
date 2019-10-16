import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

    state = {videos: [], videoSelected: ''};

    componentDidMount(){
        this.onTermSubmit("buildings")
    }

    onTermSubmit = async term => {
             const response = await youtube.get('/search' , {
                params: { 
                    q: term
                 }
             });

             this.setState({
                 videos: response.data.items,
                 videoSelected: response.data.items[0]
                });
              
    }

    onVideoSelect = (video) => {
       this.setState({videoSelected: video});
    }


    render(){
        return (
            <div className="ui container">
            <SearchBar onSubmit={this.onTermSubmit}/>
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.videoSelected} />
            </div>
            
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos ={this.state.videos} />
            </div>

            <div className="sixteen wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos ={this.state.videos} />
            </div>
           
            </div>
            </div>
            </div>
        );
        
    };
};

export default App;