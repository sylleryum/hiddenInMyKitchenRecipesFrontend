import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable, OperatorFunction, tap} from "rxjs";
import {debounceTime, distinctUntilChanged, finalize, map} from "rxjs/operators";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {RecipesService} from "../recipes.service";

@Component({
    selector: 'app-typeahead',
    templateUrl: './typeahead.component.html',
    styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
    public model!: string;
    availableIngredients:string[] = []
    selectedIngredients: string[] = []

    constructor(private recipesService: RecipesService, private route: Router) {}

    ngOnInit(): void {
        this.recipesService.getAvailableIngredients().subscribe(value =>this.availableIngredients = value)
        this.recipesService.getSelectedIngredients().subscribe(value => this.selectedIngredients = value)
    }

    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : this.availableIngredients.filter(
                    v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        )

    modelChange(ev:NgbTypeaheadSelectItemEvent<string>){
        this.recipesService.selectIngredient(ev.item)
        this.route.navigate(['/search'])
    }
    onSelect($event:any){
        console.log("you got here ");

    }

}
