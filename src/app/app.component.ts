import {Component} from '@angular/core';
import {RecipesService} from "./recipes.service";
import {colors} from './helper/literals'
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'himkRecipes';
  colors = colors
  availableIngredients:string[] = []
  selectedIngredients:string[] = []
  error: HttpErrorResponse | undefined

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipesService.getError().subscribe(value => this.error = value)
    this.recipesService.getAvailableIngredients().subscribe(value =>this.availableIngredients = value)
    this.recipesService.getSelectedIngredients().subscribe(value =>this.selectedIngredients = value)
  }

  localError() {
    throw Error('The app component has thrown an error!');
  }

}
