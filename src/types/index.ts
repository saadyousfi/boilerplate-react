export enum Status {
  idle = 'idle',
  loading = 'loading',
  fulfilled = 'fulfilled',
  error = 'error',
}
// >>> [NEW ENTITY TYPES BELOW]
export type Author = { id: string };
export type AuthorCreator = Omit<Author, 'id'>;
export type Book = { id: string };
export type BookCreator = Omit<Book, 'id'>;
