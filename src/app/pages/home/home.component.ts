import { Component, OnInit } from '@angular/core';
import { StreamState } from 'src/app/interfaces/stream-state';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  files: Array<any> = [];
  
   state!
   :StreamState ;
  currentFile: any = {};


  constructor(private audioService: AudioService, cloudService: CloudService) {
    // get media files
    cloudService.getFiles().subscribe(files => {
      this.files = files;
      console.log(this.files)
    });

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    
      console.log(this.state)
    });
  }


  ngOnInit(): void {
  }

  playStream(url:any) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
      console.log(url)
      console.log(events)
    });
  }


  openFile(file:any, index:any) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }


  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change:any) {
    this.audioService.seekTo(change.value);
  }


  
}


