import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ItemsComponent } from 'src/app/components/items/items.component';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
})
export class HomeModule { }
