import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {
  service_count = 0;
  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.service_count++;
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { 
      this.service_count--;

      if (event instanceof HttpResponse && this.service_count === -3) {
        this.hideLoader();
      }
    },
      (err: any) => {
        this.hideLoader();
    }));
  }

  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}
