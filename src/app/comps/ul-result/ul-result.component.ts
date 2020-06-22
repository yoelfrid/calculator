import { Component, OnInit } from '@angular/core';
import { InputerService } from 'src/app/serviees/inputer.service';

@Component({
  selector: 'app-ul-result',
  templateUrl: './ul-result.component.html',
  styleUrls: ['./ul-result.component.css']
})
export class UlResultComponent implements OnInit {

  constructor(public inputerSvc:InputerService) { }

  ngOnInit(): void {
  }

}
