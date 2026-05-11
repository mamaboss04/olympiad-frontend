import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 1. Импортируем наш новый компонент
import { AdminComponent } from './admin/admin.component'; 

//const routes: Routes = [
  // ... здесь могут быть твои старые маршруты (например, home или registration)
  
  // 2. Добавляем путь для профессора
  //{ path: 'admin-panel', component: AdminComponent }
//];

const routes: Routes = [
  // Если адрес пустой, мы НИЧЕГО не открываем (форма останется в главном файле)
  { path: 'admin-panel', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }