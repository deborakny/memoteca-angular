import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: ['', Validators.compose([ //possui mais que uma validação
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/) //não permite que sejam colocados apenas espaços vazios
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3) //deve ter no mínimo 3 dígitos
      ])],
      modelo: ['modelo1'],
    })
  }

  criarPensamento() {
    if (this.formulario.valid) { //se o formulário for válido
      //ao criar um novo pensamento, serão cadastradas as informações do formulário
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['listar-pensamento'])
      });      
    }
    
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'; //se o formulário for válido, retorne a classe botao
    } else {
      return 'botao__desabilitado' //senão, retorne a classe botao desabilitado
    }
  }

}
