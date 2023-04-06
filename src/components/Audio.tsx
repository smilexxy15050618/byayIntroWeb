import * as React from 'react';
import styled from 'styled-components';

interface AudioProps {
  title: string;
  src: string;
}
interface AudioState {
  status: 'playing' | 'stopped';
  duration: null | number;
  currentTime: null | number;
}

const AudioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(49, 83, 212, 1);
  border-radius: 4px;
  padding: 0 20px;
  .rate {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba(49, 83, 212, 0.1);
    transition: all 300ms linear;
  }
  .audio-title {
    font-size: 16px;
    color: rgba(49, 83, 212, 1);
    line-height: 22px;
  }
  .audio {
    position: absolute;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background: rgba(49, 83, 212, 1);
    box-shadow: 0px 10px 20px 0px rgba(31, 49, 175, 0.2);
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    right: 21px;
    top: 15px;
    .iconfont {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .iconplay {
      left: 53%;
    }
  }
`;

export class Audio extends React.Component<AudioProps, AudioState> {
  state: AudioState = {
    status: 'stopped',
    duration: null,
    currentTime: null,
  };

  audio: HTMLAudioElement | null;

  componentDidMount() {
    if (this.audio) {
      this.audio.addEventListener('timeupdate', e => {
        this.setState({
          duration: this.audio ? this.audio!.duration : null,
          currentTime: this.audio ? this.audio!.currentTime : null,
        });
      });
      this.audio.addEventListener('ended', () => {
        this.handleAudioControl('stopped');
      });
    }
  }
  componentWillUnmount() {
    this.audio.removeEventListener('timeupdate', () => {});
    this.audio.removeEventListener('ended', () => {});
  }

  componentDidUpdate(prevProps: AudioProps, prevState: AudioState) {
    if (this.state.status !== prevState.status) {
      if (this.state.status === 'stopped') {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
      if (this.state.status === 'playing') {
        this.audio.play();
      }
    }
  }

  handleAudioControl = (status: 'stopped' | 'playing') => {
    this.setState({ status });
  };

  handleAudioPlay = () => {
    const audioList = document.getElementsByTagName('audio');
    [...audioList].forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    this.audio.play();
  };

  handleAudioPause = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  render() {
    const { src, title } = this.props;
    const { duration, currentTime, status } = this.state;
    const rate = (currentTime / duration) * 100;
    const paused = this.audio ? this.audio.paused : true;
    return (
      <AudioWrapper>
        <div className="rate" style={{ width: rate ? `${rate}%` : 0 }} />
        <div className="audio-title">{title}</div>
        {paused && (
          <div className="audio" onClick={this.handleAudioPlay}>
            <i className="iconfont iconplay" />
          </div>
        )}
        {!paused && (
          <div className="audio" onClick={this.handleAudioPause}>
            <i className="iconfont iconstop" />
          </div>
        )}
        <audio src={src} ref={r => (this.audio = r)} />
      </AudioWrapper>
    );
  }
}
