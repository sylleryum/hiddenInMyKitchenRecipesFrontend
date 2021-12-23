import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {colors} from '../helper/literals'
import {BehaviorSubject} from "rxjs";
import {RecipesService} from "../recipes.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    isCollapsed = true;
    colors = colors
    availableIngredients: string[] = []
    selectedIngredients: string[] = []

    constructor(private recipesService: RecipesService,
                private route: Router) {
    }

    ngOnInit(): void {
        this.recipesService.getAvailableIngredients().subscribe(value => this.availableIngredients = value)
        this.recipesService.getSelectedIngredients().subscribe(value => this.selectedIngredients = value)
    }

    selectIngredient(event: any) {
        let ing = event.innerText
        this.recipesService.selectIngredient(ing)
        this.isCollapsed = true
    }


}
