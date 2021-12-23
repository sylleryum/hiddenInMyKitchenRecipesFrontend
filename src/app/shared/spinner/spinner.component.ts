import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() color = "black"
  @Input() size = "2em"
  constructor() { }

  ngOnInit(): void {
  }

}
