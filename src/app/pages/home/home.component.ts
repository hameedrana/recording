import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state:any;
  currentFile: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }

  openFile(file:any, i:any){
  //  Console.log(file,i) 
  }
  onSliderChangeEnd(ev:any){

  }

  previous(){}


  play(){}

  pause(){}


  next(){}



}


