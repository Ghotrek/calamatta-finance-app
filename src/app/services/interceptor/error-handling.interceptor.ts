import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            return throwError(() => err);
        }),
    )
};


