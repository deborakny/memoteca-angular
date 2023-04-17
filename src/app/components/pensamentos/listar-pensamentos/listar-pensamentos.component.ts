import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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

  constructor(private service: PensamentoService) {
    
  }

  ngOnInit(): void{ //toda a lógica que será executada assim que o component for carregado
    //subscribe informa que há "interesse" nessas informações da api
    //com o subscribe, o observable entende que é necessário emitir notificações sempre que houver uma mudança
    this.service.listar().subscribe((listaPensamentos) => { 
      this.listaPensamentos = listaPensamentos; //a variável local "listaPensamentos" irá receber a "listaPensamentos" que será obtida no observable
    }); 
  }  

}
