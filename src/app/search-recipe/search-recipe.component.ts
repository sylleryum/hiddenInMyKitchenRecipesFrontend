import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {colors} from "../helper/literals";
import {SearchResults} from "../entities";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-search-recipe',
    templateUrl: './search-recipe.component.html',
    styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent {
    colors = colors
    faTimes = faTimes
    selectedIngredients: string[] = []
    amountIngredients = 0
    recipe: SearchResults | undefined

    constructor(private recipesService: RecipesService,
                private route: Router) {
    }

    ngOnInit(): void {
        this.recipesService.getSelectedIngredients().subscribe(value => {

            this.selectedIngredients = value;
            if (this.selectedIngredients.length > 0) {
                this.recipesService.search(this.selectedIngredients.toString()).subscribe(recipes =>
                    this.recipe = recipes
                )
            } else {
                this.recipe = undefined
                this.route.navigate([""])
            }

        })
    }

    onRemove(event: any) {
        let ing = event.id
        this.recipesService.deselectIngredient(ing)
    }

}
