import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LivroComponent } from './components/livro/livroComponent';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    LivroComponent,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mylibs');
}
