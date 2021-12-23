import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FullRecipe, IngredientsAvailableStrIngredient, SearchResults} from "./entities";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {insertionSort} from "./helper/insertionSort";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private ROOT_URL = 'https://hidden-in-my-kitchen-recipes.herokuapp.com'
    private GET_INGREDIENTS_AVAILABLE = '/ingredients'
    private FULL_RECIPE = '/recipe/'
    private SEARCH = '/search?ingredients='
    private TOKEN = '878251158fccd3c9cf571d97a55cb4a7d8691a11'
    private ORDER = 'order=strIngredient'
    private KEYS_TO_RETURN = 'keys=strIngredient'
    private header = {'Authorization': 'Token ' + this.TOKEN}
    private availableIngredients$ = new BehaviorSubject<string[]>([])
    private selectedIngredients$ = new BehaviorSubject<string[]>([])
    private error$ = new BehaviorSubject<HttpErrorResponse | undefined>(undefined)

    constructor(private http: HttpClient) {
        this.fetchIngredients().subscribe(value => {
            if ("results" in value) {
                this.availableIngredients$.next(value.results)
            }
        })
    }

    getAvailableIngredients() {
        return this.availableIngredients$.asObservable()
    }

    getSelectedIngredients() {
        return this.selectedIngredients$.asObservable()
    }

    getError() {
        return this.error$.asObservable()
    }

    selectIngredient(ingredient: string): void {
        let selectedIng = this.selectedIngredients$.value
        let availableIng = this.availableIngredients$.value

        selectedIng.push(ingredient)
        availableIng.splice(availableIng.indexOf(ingredient), 1)

        this.selectedIngredients$.next(selectedIng)
        this.availableIngredients$.next(availableIng)
    }

    deselectIngredient(ingredient: string): void {
        let selectedIng = this.selectedIngredients$.value
        let availableIng = this.availableIngredients$.value

        selectedIng.splice(selectedIng.indexOf(ingredient), 1)
        availableIng.push(ingredient)
        insertionSort(availableIng);

        this.selectedIngredients$.next(selectedIng)
        this.availableIngredients$.next(availableIng)
    }

    fetchIngredients() {
        return this.http.get<IngredientsAvailableStrIngredient>(
            `${this.ROOT_URL}${this.GET_INGREDIENTS_AVAILABLE}?${this.ORDER}&${this.KEYS_TO_RETURN}`, {headers: this.header}).pipe(
            catchError(err => {
                this.errorHander(err)
                return of([])
            }))
    }

    search(ingredients: string) {
        console.log("search ingredients", this.ROOT_URL + this.SEARCH + ingredients)
        return this.http.get<SearchResults>(this.ROOT_URL + this.SEARCH + ingredients, {headers: this.header}).pipe(
            catchError(err => {
                this.errorHander(err)
                return of(undefined)
            }))

    }

    fullRecipe(idMeal: number) {
        return this.http.get<FullRecipe>(this.ROOT_URL + this.FULL_RECIPE + idMeal, {headers: this.header}).pipe(
            catchError(err => {
                this.errorHander(err)
                return of(undefined)
            }))
    }

    errorHander(error: HttpErrorResponse) {
        return this.error$.next(error)
    }
}
