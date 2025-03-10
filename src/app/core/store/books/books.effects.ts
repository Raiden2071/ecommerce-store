import { inject, Injectable } from "@angular/core";
import { loadBooks, loadBooksFailure, loadBooksSuccess } from './books.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import { BooksService } from "../../api/services/books.service";

@Injectable()
export class BooksEffect {
    private actions$ = inject(Actions);
    private booksService = inject(BooksService);

    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadBooks),
          mergeMap(() =>
            this.booksService.getBooks().pipe(
              map((books) => loadBooksSuccess({ books })),
              catchError((error) => of(loadBooksFailure({ error: error.message })))
            )
          )
        )
      );
    }