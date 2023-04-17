import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar-pensamento',
        pathMatch: 'full'
    },
    {
        path: 'criar-pensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'listar-pensamento',
        component: ListarPensamentosComponent
    },
    {
        path: 'pensamentos/excluir-pensamento/:id',
        component: ExcluirPensamentoComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}