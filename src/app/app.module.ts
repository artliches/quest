import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { LearningPathComponent } from './learning-path/learning-path.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterBuilderComponent,
    InventoryComponent,
    AbilitiesComponent,
    LearningPathComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
