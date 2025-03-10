import { createReducer, on } from "@ngrx/store";
import { Book } from "../../../shared/models/books.model";
import { loadBooks, loadBooksFailure, loadBooksSuccess } from "./books.actions";

export interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BooksState = {
    books: [],
    loading: false,
    error: null
};

export const booksReducer = createReducer(
    initialState,
    on(loadBooks, (state) => ({ ...state, loading: true })),
    on(loadBooksSuccess, (state, { books }) => ({ ...state, loading: false, books })),
    on(loadBooksFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
