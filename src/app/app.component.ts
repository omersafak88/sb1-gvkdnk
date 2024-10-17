import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currentTheme: string = 'default';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}