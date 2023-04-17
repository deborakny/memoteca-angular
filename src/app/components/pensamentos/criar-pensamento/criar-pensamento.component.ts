import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  //atributo
  pensamento = { //objeto que possui as seguintes propriedades
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router) {}

  ngOnInit(): void{

  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['listar-pensamento'])
    });
    
  }

}
