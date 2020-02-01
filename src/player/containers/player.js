import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import Layout from '../components/layout';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';
import FullScreen from '../components/full-screen';
import ProgressBar from '../components/progress-barr';
import TimeLeft from '../components/time-life';

class Player extends Component {
    
    state = {
        loading: true,
        paused: false,
        fullScreen: false,
        duration: 0.00,
        currentTime: 0.00,
        progress: 0.0
    }

    onBuffer = ( {isBuffering} ) => {
        this.setState({
            loading: isBuffering
        })
    }

    // onLoad = () => {
    //     this.setState({
    //         loading: false
    //     })
    // }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        });
    }

    // hacemos una referencia al componente Video, ya con esto puedo usar player en toda la clase
    videoRef = (ref) => {
        this.player = ref;
    }

    // En caso de que estemos en fullScreen
    fullScreen = () => {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
    }

    // Activamos fullScreen
    onFullScreen = () => {
        
        this.fullScreen();
        
        if (!this.state.fullScreen) {
            this.player.presentFullscreenPlayer();
        } else {
            this.player.dismissFullscreenPlayer();
        }
    }

    // Una vez cargado el video obtenemos y convertimos la duración a un formato legible
    onLoad = (payload) => {
        
        let duration = payload.duration / 60;
        
        let minutes = Math.floor(duration);
        
        let seconds = duration % 1;
        
        seconds = (seconds * 60) / 1000;
        
        let time = (minutes + seconds * 10).toFixed(2);
        
        this.setState({
            duration: time,
            loading: false
        });
    }
    
    // Una vez cargado el video obtenemos el tiempo transcurrido y lo convertimos a formato legible
    onProgress = (payload) => {
        
        let currentTime = payload.currentTime / 60;
        
        let minutes = Math.floor(currentTime);
        
        let seconds = currentTime % 1;
        
        seconds = (seconds * 60) / 1000;
        
        let time = (minutes + seconds * 10).toFixed(2);
        
        this.setState({
            currentTime: time,
            progress: (payload.currentTime / payload.seekableDuration)
        });
    }
    
    render() {
        return (
            <Layout 
                video = {
                    <Video 
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
                        
                        style={styles.video}
                            
                        resizeMode='contain'

                        onBuffer = { this.onBuffer }
                        onLoad = { this.onLoad }
                        paused={ this.state.paused }

                        ref={this.videoRef} 
                        onProgress={this.onProgress}
                    />
                }

                loader = {
                    <ActivityIndicator color="red"/>
                }

                loading = { this.state.loading }

                controls = {
                    <ControlLayout>
                        <PlayPause onPress= { this.playPause } paused = {this.state.paused} />

                        <ProgressBar  progress={this.state.progress} />
                        
                        <TimeLeft   duration={this.state.duration}
                            currentTime={this.state.currentTime}
                        />
                        
                        <FullScreen onPress={this.onFullScreen}  />

                    </ControlLayout>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right:0,
        bottom: 0,
        top: 0
    }
});

export default Player