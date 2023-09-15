import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { EMPTY, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, throwError } from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro: string = '';
  livrosResultado: LivrosResultado;

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(300),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
      map(resultado => {
        this.livrosResultado = resultado.items ? resultado : { items: [], totalItems: 0 }}
      ),
      map(() => this.livrosResultadoParaLivros(this.livrosResultado)),
      catchError(() => {
        this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!'
        return EMPTY;
      })
    );

  constructor(private livroService: LivroService) { }

  livrosResultadoParaLivros(livrosResultado: LivrosResultado): LivroVolumeInfo[] {
    return livrosResultado.items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}



