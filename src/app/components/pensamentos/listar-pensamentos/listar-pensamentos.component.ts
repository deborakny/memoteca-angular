import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos: Pensamento[] = []; //a lista virá do backend
    // {
    //   conteudo: 'Angular',
    //   autoria: 'Debs',
    //   modelo: 'modelo1'
    // },
    // {
    //   conteudo: 'Comunicação entre componentes',
    //   autoria: 'Debs',
    //   modelo: 'modelo2'
    // },
    // {
    //   conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    //     'Vivamus at sem dolor.Donec sit amet dolor feugiat, bibendum dui vitae, molestie augue.' +
    //     'Vivamus justo neque, aliquet et efficitur ac, viverra eu felis.Nulla facilisi.Praesent auctor lacinia sapien a finibus.' +
    //     'Vivamus justo dolor, blandit et odio non, pretium faucibus velit.Vivamus ut leo lorem.',
    //   autoria: 'Debs',
    //   modelo: 'modelo3'
    // },
 

  temPensamento(): boolean{
    return this.listaPensamentos.length > 0;  
  }

  constructor() {
    
  }

  ngOnInit(): void{

  }

}
