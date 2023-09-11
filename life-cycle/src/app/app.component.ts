import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra! : Item[];
  itemParaSerEditado! : Item;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaDeCompraService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaDeCompraService.atualizarLocalStorage();
  }

  editarItem(item: Item): void {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number): void {
    const index = this.listaDeCompra.findIndex((item)=>item.id === id);
    this.listaDeCompra.splice(index, 1);
  }

  limparLista(): void {
    this.listaDeCompra = [];
  }
}
