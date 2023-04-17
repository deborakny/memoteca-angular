import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent {
  
  //@Input() faz com que a propriedade receba informações 
  //do componente pai(listar - pensamento)
  @Input() pensamento: Pensamento = { //Interface Pensamento
    //Esses dados não estão sendo utilizados, pois eles veem do componente pai (listar-pensamento)
    id: 0,
    conteudo: 'Angular',
    autoria: 'Debs',
    modelo: 'modelo1'
  }

  constructor() {
    
  }

  ngOnInit(): void{

  }

  larguraPensamento(): string{
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
