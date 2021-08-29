import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { InterpolationComponent } from "./components/01-interpolation/interpolation.component";
import { IObservableComponent } from "./components/i-observable/i-observable.component";
import { BackComponent } from "./components/k-routing/back/back.component";
import { NotFoundComponent } from "./components/k-routing/not-found/not-found.component";
import { ParamsComponent } from "./components/k-routing/params/params.component";
import { LPipesComponent } from "./components/l-pipes/l-pipes.component";
import { MReactiveFormsComponent } from "./components/m-reactive-forms/m-reactive-forms.component";
import { TitleComponent } from "./components/title.component";

const routes: Routes = [
    {path: '', component: TitleComponent},
    {path: 'interpolation', component: InterpolationComponent},
    {path: 'obs', component: IObservableComponent },
    {path: 'params/:name', component: ParamsComponent },
    {path: 'back', component: BackComponent  },
    { path: 'pipes', component: LPipesComponent },
    { path: 'forms', component: MReactiveFormsComponent },
    {path: '**', component: NotFoundComponent  },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }