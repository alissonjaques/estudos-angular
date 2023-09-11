import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/Item';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  valorItem!: string;
  editando: boolean = false;
  textoBtn: string = 'Salvar item'

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

 ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem(): void {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  editarItem(){
    this.listaDeCompraService.editarItemNaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar item"
}

  limparCampo(): void {
    this.valorItem = ''
  }
}
