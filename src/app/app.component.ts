import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  mediaElement: HTMLElement;
  
  playerOptions = { // RTSP player options
    socket: "wss://streamedian.com/ws/", // --> Proxy socket URL for connection
    bufferDuration: 30,
    errorHandler: (error) => {
      console.log(error);
    },
    infoHandler: (info) => { console.log('Info', info) }
  }

  constructor() { }

  ngOnInit() {
    this.mediaElement = document.getElementById('test_video'); // Get HTML media element 
    if (window['Streamedian']) { // check streamedian in window object
      let registerPlayer = window['Streamedian'].player(this.mediaElement, this.playerOptions)
    }
  }

}
