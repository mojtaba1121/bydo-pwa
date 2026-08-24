import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

export type AppLanguage = 'fa' | 'en';
export type AppTheme = 'light' | 'dark';
export type ThemeSource = AppTheme | 'system';

const LANGUAGE_STORAGE_KEY = 'bydo.language';
const THEME_STORAGE_KEY = 'bydo.theme';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly languageState = signal<AppLanguage>(this.readInitialLanguage());

  readonly language = this.languageState.asReadonly();

  constructor() {
    effect(() => {
      const language = this.languageState();

      this.document.documentElement.lang = language;
      this.document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    });
  }

  setLanguage(language: AppLanguage) {
    this.languageState.set(language);
  }

  toggleLanguage() {
    this.languageState.update((language) => (language === 'fa' ? 'en' : 'fa'));
  }

  private readInitialLanguage(): AppLanguage {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return storedLanguage === 'en' ? 'en' : 'fa';
  }
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
  private readonly sourceState = signal<ThemeSource>(this.readInitialThemeSource());
  private readonly themeState = signal<AppTheme>(this.resolveTheme(this.sourceState()));

  readonly source = this.sourceState.asReadonly();
  readonly theme = this.themeState.asReadonly();

  constructor() {
    this.mediaQuery?.addEventListener('change', () => {
      if (this.sourceState() === 'system') {
        this.themeState.set(this.resolveTheme('system'));
      }
    });

    effect(() => {
      const source = this.sourceState();
      const theme = this.resolveTheme(source);

      this.themeState.set(theme);
      this.document.documentElement.dataset['theme'] = theme;
      this.document.documentElement.style.colorScheme = theme;
      localStorage.setItem(THEME_STORAGE_KEY, source);
    });
  }

  setTheme(source: ThemeSource) {
    this.sourceState.set(source);
  }

  toggleTheme() {
    this.sourceState.update((source) => (this.resolveTheme(source) === 'dark' ? 'light' : 'dark'));
  }

  private readInitialThemeSource(): ThemeSource {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
      return storedTheme;
    }

    return 'system';
  }

  private resolveTheme(source: ThemeSource): AppTheme {
    if (source === 'system') {
      return this.mediaQuery?.matches ? 'dark' : 'light';
    }

    return source;
  }
}
