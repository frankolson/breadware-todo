export interface StoreState {
  flashes: Flash[],
  todos: Todo[],
  user: User
}

export interface Flash {
  id: number,
  text: string
}

export interface Todo {
  id: number,
  title: string,
  text: string,
  completed: boolean
}

export interface User {
  role: string,
  authenticated: boolean
}

