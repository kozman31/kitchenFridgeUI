import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryComponent } from './pantry/pantry.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { ViewRecipeComponent } from './recipes/view-recipe/view-recipe.component';

const routes: Routes = [
  {path: 'recipes/new', component: AddRecipeComponent},
  {path: 'recipes', component: ViewRecipeComponent},
  {path: 'pantry', component: PantryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
