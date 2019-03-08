import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { CountriesService } from '../countries.service';
import { takeUntil, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesComponentResolverService implements Resolve<any> {
  constructor(
    private service: CountriesService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {

    const countryCode = route.paramMap.get('id');

    let functionName = 'getCountry';
    if (!countryCode) {
      functionName = 'getCountries';
    }

    if (isPlatformBrowser(this.platformId)) {
      return this.service[functionName](countryCode).pipe(
        catchError(error => of(error))
      );
    }

    const watchdog: Observable<number> = timer(500);

    return Observable.create(subject => {
      this.service[functionName](countryCode)
        .pipe(takeUntil(watchdog), catchError(error => of(error)))
        .subscribe(response => {
          subject.next(response);
          subject.complete();
        });
      watchdog.subscribe(() => {
        subject.next(null);
        subject.complete();
      });
    });
  }
}
