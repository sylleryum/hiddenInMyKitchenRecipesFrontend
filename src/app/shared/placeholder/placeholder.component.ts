import { Component, OnInit } from '@angular/core';
import {faUtensils, faHamburger} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  faUtensils = faUtensils
  faHamburger = faHamburger

  constructor() { }

  ngOnInit(): void {
  }

}
