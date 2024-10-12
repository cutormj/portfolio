// types.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  bio: string;
}

export interface NewUser {
  name: string;
  email: string;
  username: string;
  bio: string;
}

export interface UserFormProps {
  onSubmit: (userData: NewUser | Partial<User>) => Promise<void>; // Update this to return Promise<void>
  initialData?: Partial<User> | null;
  mode: 'add' | 'update';
}
