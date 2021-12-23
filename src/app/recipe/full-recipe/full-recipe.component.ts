import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../recipes.service";
import {ActivatedRoute} from "@angular/router";
import {FullRecipe} from "../../entities";
import {colors} from '../../helper/literals'
import {ytToEmbed} from "../../helper/recipeUtils";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-full-recipe',
    host: {class: 'container-fluid p-0'},
    templateUrl: './full-recipe.component.html',
    styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent implements OnInit {
    faSearch = faSearch
    faTag = faTag
    faGlobeAmericas = faGlobeAmericas
    recipe!: FullRecipe | undefined
    colors = colors
    selectedIngredients: string[] = []

    constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let id = this.route.snapshot.queryParams['id']
        this.recipesService.getSelectedIngredients().subscribe(value => this.selectedIngredients = value)
        this.recipesService.fullRecipe(id).subscribe(value => {
            this.recipe = value
            if (this.recipe) {
                this.recipe.strYoutube = ytToEmbed(this.recipe.strYoutube)
            }
        })
    }

}
