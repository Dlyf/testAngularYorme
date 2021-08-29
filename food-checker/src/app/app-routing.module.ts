import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitDetailComponent } from "./components/produit-detail/produit-detail.component";
import { ProduitListComponent } from "./components/produit-list/produit-list.component";

const routes: Routes = [
    { path: '', component: ProduitListComponent},
    { path: 'produit/:id', component: ProduitDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}