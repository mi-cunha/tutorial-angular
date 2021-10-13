import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntroducaoComponent } from './tutorial/introducao/introducao.component';
import { ConhecendoAngularComponent } from './tutorial/conhecendo-angular/conhecendo-angular.component';
import { ConceitosComponent } from './tutorial/conceitos/conceitos.component';
import { PreparandoAmbienteComponent } from './tutorial/preparando-ambiente/preparando-ambiente.component';
import { HelloWorldComponent } from './tutorial/hello-world/hello-world.component';
import { EstruturaAplicacaoComponent } from './tutorial/estrutura-aplicacao/estrutura-aplicacao.component';


import { AngularMaterialModule } from './tutorial/shared/angular-material/angular-material.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
