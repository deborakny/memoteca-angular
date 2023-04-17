import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { } //ActivatedRoute - classe que fornece informações sobre os parâmetros, rotas e caminhos
  //que virão dos cards de pensamento. Com alguns métodos, é possível conseguir informações
  //dos cards, na rota específica

  ngOnInit(): void {
    //snapshot - faz uma captura instantânea da rota no momento em que ela foi acessada
    //paramMap - traz um "mapa" com as informações (parâmetros obrigatórios e opcionais) do pensamento
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamento']);
      });      
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento']);
  }

}
