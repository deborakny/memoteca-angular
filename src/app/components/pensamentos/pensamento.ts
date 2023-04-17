//export - para que a interface fique visível e possa ser utilizada em outras classes
export interface Pensamento { 
    //passar os atributos esperados
    id: number;
    conteudo: string;
    autoria: string;
    modelo: string;
}