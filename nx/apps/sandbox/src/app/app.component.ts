import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  imports: [RouterModule, HttpClientModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sandbox';

  todos$?: Observable<any>;

  constructor(private _httpSvc: HttpClient) {}

  tryAPI(): void {
    this.todos$ = this._httpSvc.get('http://localhost:3000/api');
    // this._httpSvc.get('http://localhost:3000/api').subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
