import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TypeaheadComponent} from "./typeahead/typeahead.component";
import {AppComponent} from "./app.component";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {SearchRecipeComponent} from "./search-recipe/search-recipe.component";
import {PlaceholderComponent} from "./shared/placeholder/placeholder.component";
import {FullRecipeComponent} from "./recipe/full-recipe/full-recipe.component";

const routes: Routes = [
  {path: '', component: PlaceholderComponent},
  {path: 'search', component: SearchRecipeComponent},
  {path: 'recipe', component: FullRecipeComponent}
];

@NgModule({
  declarations: [],
  //// imports: [CommonModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
