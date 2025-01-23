import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
      MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuTrigger,
    MatMenuModule,
    RouterLink
  ]
})
export class LayoutModule { }
