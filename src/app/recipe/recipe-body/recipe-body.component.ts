import {Component, Input, OnInit} from '@angular/core';
import {FullRecipe} from "../../entities";
import {clearIngredients} from "../../helper/recipeUtils";


@Component({
    selector: '[recipeBody]',
    templateUrl: './recipe-body.component.html',
    styleUrls: ['./recipe-body.component.css']
})
export class RecipeBodyComponent implements OnInit {
    @Input() recipe!: FullRecipe
    instructions!: string
    ingredients!:string[][]
    ordered = true

    constructor() {
    }

    ngOnInit(): void {
        if (this.recipe != undefined) {
            this.instructions = this.recipe.strInstructions
            // this.clearInstructions(this.recipe.strInstructions)
            this.ingredients = clearIngredients(this.recipe)
        }

    }

    //there is no standard in the way the instructions are returned, therefore, some specific rules are needed to be added as more "weird" instruction formats are found
    clearInstructions(ins: string) {
        //some recipes have weirds initial spacing, no specific standard found, therefore, better not to change it
        if (ins.indexOf("\n")<5){
            this.instructions = ins
            return
        }

        let instructions = ins
        instructions = '<li>' + instructions

        // @ts-ignore
        instructions = instructions.replaceAll('\r\n\r\n\r\n', '\r\n')
        // @ts-ignore
        instructions = instructions.replaceAll('\r\n\r\n', '\r\n')
        // @ts-ignore
        instructions = instructions.replaceAll('\r\n', '\n </li><li>')
        instructions = instructions + '</li>'
        this.instructions = instructions

        let isNumbered = instructions.charAt(instructions.indexOf("</li><li>") + 9)
        if (isNaN(Number(isNumbered))) {
            this.ordered = false
        }
        console.log()
    }

}
