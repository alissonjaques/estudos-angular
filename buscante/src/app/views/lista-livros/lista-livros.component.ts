import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import {
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
import { LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { FormControl } from '@angular/forms';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger('100ms', [
              animate(
                '500ms ease-out',
                keyframes([
                  style({
                    opacity: 0,
                    transform: 'translateY(-50px)',
                    offset: 0,
                  }),
                  style({
                    opacity: 0.5,
                    transform: 'translateY(-25px)',
                    offset: 0.3,
                  }),
                  style({ opacity: 1, transform: 'none', offset: 1 }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('100ms', [
              animate(
                '500ms ease-out',
                keyframes([
                  style({ opacity: 1, transform: 'none', offset: 0 }),
                  style({
                    opacity: 0.5,
                    transform: 'translateY(-25px)',
                    offset: 0.3,
                  }),
                  style({
                    opacity: 0,
                    transform: 'translateY(-50px)',
                    offset: 1,
                  }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro: string = '';
  livrosResultado: LivrosResultado;

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(300),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
    map((resultado) => {
      this.livrosResultado = resultado.items
        ? resultado
        : { items: [], totalItems: 0 };
    }),
    map(() => this.livrosResultadoParaLivros(this.livrosResultado)),
    catchError(() => {
      this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!';
      return EMPTY;
    })
  );

  constructor(private livroService: LivroService) {}

  livrosResultadoParaLivros(
    livrosResultado: LivrosResultado
  ): LivroVolumeInfo[] {
    return livrosResultado.items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
