import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'O universo é infinito?',
      autoria: 'Alisson Jaques',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'A vida é como andar de bicicleta, para manter o equilíbrio é preciso se manter em movimento.',
      autoria: 'Albert Einstein',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Na vastidão do universo, somos breves centelhas de consciência, buscando significado e conexão em nossa jornada efêmera pela existência cósmica.',
      autoria: 'ChatGPT',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
