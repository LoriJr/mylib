import { Livro } from '../../models/livro.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class LivroComponent {

  @Input() livro!: Livro;

}
