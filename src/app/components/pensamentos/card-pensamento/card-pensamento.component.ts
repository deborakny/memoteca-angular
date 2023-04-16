import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent {
  
  //@Input() faz com que a propriedade receba informações 
  //do componente pai(listar - pensamento)
  @Input() pensamento = { 
    conteudo: 'Angular',
    autoria: 'Debs',
    modelo: 'modelo1'
  }

  constructor() {
    
  }

  ngOnInit(): void{

  }

}
