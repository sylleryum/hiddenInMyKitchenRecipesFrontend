import {Component, Input, OnInit} from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import {FullRecipe} from "../../entities";

@Component({
  selector: '[recipeHeader]',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css']
})
export class RecipeHeaderComponent implements OnInit {
  faTag = faTag
  faGlobeAmericas = faGlobeAmericas
  @Input() recipe!: FullRecipe

  constructor() { }

  ngOnInit(): void {
  }

}
