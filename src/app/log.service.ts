import { Injectable } from '@angular/core';

@Injectable({
  //bonne pratique, préférée à la déclaration du provider dans app.module
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  public log(message: string) {
    console.log('[log] : ', message);
  }
}
