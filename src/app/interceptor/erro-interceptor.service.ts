import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IMensagem} from "../shared/modelo/IMensagem";

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: IMensagem) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => this.processarErroResposta(erro)));
  }

  processarErroResposta(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.mensagemService.erro(erro.message);
    return throwError(() => erro);
  }
}
