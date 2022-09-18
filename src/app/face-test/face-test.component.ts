import { Component, OnInit,Input } from '@angular/core';
import {FaceTest} from '../models/face-test.model'
@Component({
  selector: 'app-face-test',
  templateUrl: './face-test.component.html',
  styleUrls: ['./face-test.component.css']
})

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class FaceTestComponent implements OnInit{
  @Input() faceTest!:FaceTest 
  clickOn!:string

  ngOnInit(): void {  
    this.clickOn="Oh sap"
  }
  onAddSnap():void{
    if(this.clickOn!="Oh sap"){
      this.faceTest.snaps--
      this.clickOn="Oh sap"
    }else{
      this.faceTest.snaps++
      this.clickOn="Oup sap"
    }
  }
}

