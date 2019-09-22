import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RegisterComponent } from './user/register/register.component';
import { ProfileFormComponent } from './user/profile-form/profile-form.component';
import { PasswordFormComponent } from './user/password-form/password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PantryComponent,
    AddRecipeComponent,
    ViewRecipeComponent,
    AddItemComponent,
    RegisterComponent,
    ProfileFormComponent,
    PasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
