import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  //atributo - não será mais utilizado
  // pensamento = { //objeto que possui as seguintes propriedades
  //   conteudo: '',
  //   autoria: '',
  //   modelo: ''
  // }

  //atributo que irá representar o formulário
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void{
    this.formulario = this.fb.group({
      conteudo: [''],
      autoria: [''],
      modelo: [''],
    })
  }

  criarPensamento() {
    //ao criar um novo pensamento, serão cadastradas as informações do formulário
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['listar-pensamento'])
    });
    
  }

}
