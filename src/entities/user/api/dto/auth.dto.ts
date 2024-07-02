import { User } from '@/entities/user';

export interface AuthDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}
