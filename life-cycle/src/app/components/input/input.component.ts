import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  valorItem!: string;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(): void {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(): void {
    this.valorItem = ''
  }
}
