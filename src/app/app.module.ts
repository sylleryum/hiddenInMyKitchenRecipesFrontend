import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgScrollbarModule} from 'ngx-scrollbar';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TypeaheadComponent} from './typeahead/typeahead.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {LoaderModule} from "./shared/loaderGlobal/loader.module";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchRecipeComponent} from './search-recipe/search-recipe.component';
import {CurrentSelectionComponent} from './current-selection/current-selection.component';
import {SharedModule} from "./shared/shared.module";
import {RecipeModule} from "./recipe/recipe.module";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        TypeaheadComponent,
        SideMenuComponent,
        SearchRecipeComponent,
        CurrentSelectionComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        MatProgressSpinnerModule,
        LoaderModule,
        AppRoutingModule,
        RouterModule,
        NgScrollbarModule,
        FontAwesomeModule,
        SharedModule,
        RecipeModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
