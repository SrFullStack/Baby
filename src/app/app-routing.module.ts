import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabySiterComponent } from './baby-siter/baby-siter.component';

const routes: Routes = [
{
  path:"baby-siter",
  component:BabySiterComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
