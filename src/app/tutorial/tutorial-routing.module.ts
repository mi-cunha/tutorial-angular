import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConceitosComponent } from './conceitos/conceitos.component';
import { ConhecendoAngularComponent } from './conhecendo-angular/conhecendo-angular.component';
import { EstruturaAplicacaoComponent } from './estrutura-aplicacao/estrutura-aplicacao.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { PreparandoAmbienteComponent } from './preparando-ambiente/preparando-ambiente.component';


const routes: Routes = [
  {
    path: '',
    component: IntroducaoComponent
  },
  {
      path: 'conhecendo-angular',
      component: ConhecendoAngularComponent  
  },
  {
      path: 'conceitos',
      component: ConceitosComponent  
  },
  {
      path: 'preparando-ambiente',
      component: PreparandoAmbienteComponent  
  },
  {
      path: 'hello-world',
      component: HelloWorldComponent  
  },
  {
      path: 'estrutura-aplicacao',
      component: EstruturaAplicacaoComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
