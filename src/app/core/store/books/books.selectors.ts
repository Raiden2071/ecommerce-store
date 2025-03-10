import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState } from "./books.reducer";

export const selectBookState = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(selectBookState, state => state.books);
export const selectBooksLoading = createSelector(selectBookState, state => state.loading);
export const selectBooksError = createSelector(selectBookState, state => state.error);
