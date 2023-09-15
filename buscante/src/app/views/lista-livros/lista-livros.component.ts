import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(300),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
      map(items => this.livrosResultadoParaLivros(items))
    );

  constructor(private livroService: LivroService) { }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {

      console.log(item)
      return new LivroVolumeInfo(item);
    });
  }
}



