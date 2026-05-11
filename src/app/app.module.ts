import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Добавь это для работы *ngFor

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component'; // Импорт должен быть здесь

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,     // ДОБАВЬ СЮДА: Чтобы циклы и условия работали
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    AdminComponent    // Import standalone component here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }