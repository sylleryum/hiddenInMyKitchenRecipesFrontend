import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-error',
  templateUrl: './on-error.component.html',
  styleUrls: ['./on-error.component.css']
})
export class OnErrorComponent implements OnInit {
  @Input() status!:number
  @Input() statusMessage!:string

  constructor() { }

  ngOnInit(): void {
  }

}
