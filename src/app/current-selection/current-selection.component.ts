import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes.service";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {colors} from "../helper/literals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-selection',
  templateUrl: './current-selection.component.html',
  styleUrls: ['./current-selection.component.css']
})
export class CurrentSelectionComponent implements OnInit {
  colors = colors
  faTimes = faTimes
  selectedIngredients:string[] = []

  constructor(private recipesService: RecipesService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.recipesService.getSelectedIngredients().subscribe(value => {
      this.selectedIngredients = value;
    })
  }

  onRemove(event: any) {
    let ing = event.id
    this.recipesService.deselectIngredient(ing)
    // this.route.navigate(['/search'])
  }


}
