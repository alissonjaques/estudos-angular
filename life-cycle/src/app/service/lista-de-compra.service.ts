import { Injectable } from '@angular/core';
import { Item } from '../interfaces/Item';
@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {}

  getListaDeCompra(): Item[] {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string): Item {
    const id = this.listaDeCompra.length + 1
    const item : Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string): void {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
  }

  editarItemNaLista(itemAntigo: Item, nomeEditadoDoItem: string){
    const id = itemAntigo.id;
    const itemEditado: Item = {
        id: id,
        nome: nomeEditadoDoItem,
        data: itemAntigo.data,
        comprado: itemAntigo.comprado
    }
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }
}
