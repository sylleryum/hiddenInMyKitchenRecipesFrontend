import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../loader.service";
import { ngxLoadingAnimationTypes } from 'ngx-loading'
import {colors} from "../../helper/literals"
@Component({
  selector: 'loader',
  template: '<ngx-loading [config]="{animationType: ngxLoadingAnimationTypes.rectangleBounce, ' +
    'primaryColour:colors.color2}" [show]="$any(loading | async)"></ngx-loading>'
})
export class LoaderComponent implements OnInit {
  public colors = colors;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading:Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
