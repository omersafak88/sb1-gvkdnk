import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>('default');

  constructor() {}

  setTheme(theme: string) {
    this.currentTheme.next(theme);
  }

  getTheme() {
    return this.currentTheme.asObservable();
  }
}