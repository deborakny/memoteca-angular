import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

//parte do angular core - sinaliza que é uma classe injetável
//pode ser utilizada em outros componentes através do método de injeção de dependências
@Injectable({
  providedIn: 'root' //ProvidedIn - metadado - indica que esse serviço pode ser disponibilizado para toda a aplicação
})
export class PensamentoService {

  private readonly api = 'http://localhost:3000/pensamentos';

  //A classe PensamentoService possui dependência da classe httpClient
  //Para que o httpClient atenda o PensamentoService, usa-se o construtor
  //A injeção de dependência é feita através do construtor
  //Libera o acesso a todos os metodos da httpclient
  //A injeção de depenências é um padrão de projeto, onde uma classe solicita dependências
  // externas, ao invés de cria-las
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> { //observable que retorna uma lista de pensamentos
    return this.http.get<Pensamento[]>(this.api);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento); //passar a url e o pensamento que quero cadastrar   
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.api}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.api}/${id}`;
    return this.http.get<Pensamento>(url);
  }
  
}
