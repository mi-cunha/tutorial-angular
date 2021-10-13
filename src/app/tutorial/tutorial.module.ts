import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TutorialRoutingModule } from './tutorial-routing.module';

import { IntroducaoComponent } from './introducao/introducao.component';
import { EstruturaAplicacaoComponent } from '../tutorial/estrutura-aplicacao/estrutura-aplicacao.component';
import { ConceitosComponent } from './conceitos/conceitos.component';
import { ConhecendoAngularComponent } from './conhecendo-angular/conhecendo-angular.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PreparandoAmbienteComponent } from './preparando-ambiente/preparando-ambiente.component';

import { AngularMaterialModule } from './shared/angular-material/angular-material.module';





@NgModule({
  declarations: [  
    IntroducaoComponent,
    ConhecendoAngularComponent,
    ConceitosComponent,
    PreparandoAmbienteComponent,
    HelloWorldComponent,
    EstruturaAplicacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TutorialRoutingModule,
    AngularMaterialModule    
  ]
})
export class TutorialModule { }
