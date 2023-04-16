import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: 'Angular',
      autoria: 'Debs',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Debs',
      modelo: 'modelo2'
    },
    {
      conteudo: 'NgFor',
      autoria: 'Debs',
      modelo: 'modelo3'
    },
  ];

  constructor() {
    
  }

  ngOnInit(): void{

  }

}
