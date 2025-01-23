import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MatriculaPipe } from './shared/pipes/matricula.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {LayoutModule} from "./layout/layout.module";
import {UsuarioModule} from "./usuario/usuario.module";

@NgModule({
  declarations: [
    AppComponent,
    MatriculaPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatBadgeModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        LayoutModule,
        UsuarioModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
