import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true, // Позволяет компоненту работать самостоятельно
  imports: [CommonModule, HttpClientModule], // Подключаем инструменты для циклов (*ngFor) и запросов (http)
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  teams: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Делаем запрос к твоему серверу
    this.http.get('https://olympiad-backend-cykq.onrender.com').subscribe({
      next: (data: any) => {
        this.teams = data;
        console.log('Данные получены:', data);
      },
      error: (err) => {
        console.error('Ошибка при получении данных:', err);
      }
    });
  }
}