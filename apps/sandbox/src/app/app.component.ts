import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  imports: [RouterModule, HttpClientModule, CommonModule, ReactiveFormsModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "sandbox";

  todos$?: Observable<{ description: string; _id: string }[]>;
  todoForm: FormGroup = new FormGroup({
    description: new FormControl("", Validators.required),
  });

  constructor(private _httpSvc: HttpClient) {}

  addTodo() {
    if (this.todoForm.valid) {
      const newTodo = this.todoForm.value;
      // Handle the new todo submission logic here
      console.log("New Todo:", newTodo);

      this._httpSvc
        .post(import.meta.env.NG_APP_API_URL, {
          description: newTodo.description,
        })
        .subscribe(() => {
          this.fetchTodos();
        });

      // Optionally reset the form after submission
      this.todoForm.reset();
    }
  }

  fetchTodos(): void {
    this.todos$ = this._httpSvc.get<{ description: string; _id: string }[]>(
      import.meta.env.NG_APP_API_URL
    );
  }
}
