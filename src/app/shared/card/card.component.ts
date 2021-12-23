import {Component, Input, OnInit} from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faTag = faTag
  faGlobeAmericas = faGlobeAmericas
  @Input() img!:string
  @Input() text!:string
  @Input() id!: string | number

  constructor() { }

  ngOnInit(): void {
  }

}
