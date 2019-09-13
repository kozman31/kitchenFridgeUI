import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PantryComponent } from './pantry/pantry.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { ViewRecipeComponent } from './recipes/view-recipe/view-recipe.component';
import { AddItemComponent } from './pantry/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PantryComponent,
    AddRecipeComponent,
    ViewRecipeComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    }
}
