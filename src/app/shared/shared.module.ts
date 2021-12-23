import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {OnErrorComponent} from "./on-error/on-error.component";
import {PlaceholderComponent} from "./placeholder/placeholder.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {SafePipe} from "./safe.pipe";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoaderInterceptor} from "./loaderGlobal/loaderInterceptor";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        CardComponent,
        OnErrorComponent,
        PlaceholderComponent,
        SpinnerComponent,
        SafePipe,

    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
    exports: [
        CardComponent,
        OnErrorComponent,
        PlaceholderComponent,
        SpinnerComponent,
        SafePipe,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ]
})
export class SharedModule {
}
