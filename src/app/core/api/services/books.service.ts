import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../../shared/models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:3000/books';
  private httpClient = inject(HttpClient);


  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/${id}`);
  }

  getBooksByGenre(genre: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}?genre=${genre}`);
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}?q=${query}`);
  }
}
