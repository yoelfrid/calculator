import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InputerService } from 'src/app/serviees/inputer.service';

@Component({
  selector: 'app-li-input',
  templateUrl: './li-input.component.html',
  styleUrls: ['./li-input.component.css']
})
export class LiInputComponent implements OnInit {

  constructor(private inputerSvc:InputerService) { }

  num1: string ='';
  resulte: string ='';
  number: string ='';

  add(value: string){
    if (value == '=') {
    
      
      this.number=this.num1 + '='+ String(eval(this.num1));
      this.resulte =(eval(this.num1));
      this.inputerSvc.inputArr.push(this.number);

      this.number=''
      this.num1=''
      return
    }
    this.num1+= value;
  }


  ngOnInit(): void {}
  
}
