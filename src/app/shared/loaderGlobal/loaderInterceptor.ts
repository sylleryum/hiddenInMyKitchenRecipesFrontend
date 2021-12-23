import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoaderService} from "../loader.service";
import {finalize} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials:true
    })

    this.loaderService.show();
    return next.handle(req).pipe(finalize(() => this.loaderService.hide()))
  }

}
