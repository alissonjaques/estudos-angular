import { Component, OnDestroy } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = '';
  subscription: Subscription;

  constructor(private livroService: LivroService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  buscarLivros() {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe({
      next: (retornoAPI) => console.log(retornoAPI),
      error: (error) => console.log(error)
    })
  }
}



