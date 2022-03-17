import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: string;

  constructor(renderFactory: RendererFactory2) {
    this.renderer = renderFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColorTheme();
    // this.renderer.addClass(document.body, this.colorTheme);
    document.body.setAttribute('theme', this.colorTheme);
  }

  isDarkMode() {
    return this.colorTheme === 'theme-dark';
  }

  update(theme: 'theme-dark' | 'theme-light') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'theme-dark' ? 'theme-light' : 'theme-dark';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  setColorTheme(theme: any) {
    this.colorTheme = theme;
    localStorage.setItem('theme', theme);
  }
  getColorTheme() {
    if (localStorage.getItem('default-theme')) {
      this.colorTheme = localStorage.getItem('default-theme');
    }
  }
}
