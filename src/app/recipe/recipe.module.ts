import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullRecipeComponent} from "./full-recipe/full-recipe.component";
import {RecipeHeaderComponent} from "./recipe-header/recipe-header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { RecipeBodyComponent } from './recipe-body/recipe-body.component';


@NgModule({
    declarations:
        [
            FullRecipeComponent,
            RecipeHeaderComponent,
            RecipeBodyComponent],
    exports: [
        FullRecipeComponent,
        RecipeHeaderComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        SharedModule,
        RouterModule
    ]
})
export class RecipeModule {
}
