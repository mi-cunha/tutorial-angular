import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorialRoutingModule } from "./tutorial/tutorial-routing.module";

const routes: Routes =[
    {
        path: '',
        redirectTo: 'tutorial',
        pathMatch: 'full'
    },
    { //lazy loading
        path: 'tutorial',
        loadChildren: () => import('./tutorial/tutorial.module').then(m => m.TutorialModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        TutorialRoutingModule
    ],
    exports:[
        RouterModule
    ]    

})

export class RoutingModule {}