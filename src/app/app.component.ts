import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false 
})
export class AppComponent {
  teamData = {
    teamName: '',
    institution: '',
    country: '',
    city: '',
    phone: '',
    email: '',
    vkLink: '',
    consent: false,
    members: Array.from({ length: 5 }, () => ({
      fio: '',
      faculty: '',
      course: '',
      group: ''
    })),
    mentor: {
      fio: '',
      jobTitle: '',
      organization: '',
      email: ''
    }
  };

  constructor(private http: HttpClient, private router: Router) {}

  isAdminPage(): boolean {
    return this.router.url.includes('admin-panel');
  }

  sendRegistration() {
    if (!this.teamData.consent) {
      alert('Пожалуйста, подтвердите согласие на обработку данных');
      return;
    }

    this.http.post('https://olympiad-backend-cykq.onrender.com', this.teamData)
      .subscribe({
        next: () => {
          alert('Регистрация успешно завершена!');
          // Перезагружаем страницу, чтобы очистить форму и обновить таблицу
          window.location.reload(); 
        },
        error: (err) => {
          alert('Ошибка! Убедитесь, что сервер Node.js запущен.');
          console.error(err);
        }
      });
  }
}