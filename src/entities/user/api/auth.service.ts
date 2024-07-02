import Cookies from 'js-cookie';
import { User } from '@/entities/user';
import { axiosWithAuth } from '@/shared/libs/axios';
import { Tokens } from '@/shared/types';
import { AuthDto, AuthResponse } from './dto/auth.dto';

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(Tokens.ACCESS_TOKEN, accessToken, {
    domain: import.meta.env.VITE_DOMAIN,
    sameSite: 'Strict',
    expires: +import.meta.env.VITE_ACCESS_TOKEN_EXPIRES,
  });
};

export const removeAccessToken = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN);
};

class AuthService {
  private readonly _baseUrl = '/auth';

  public async login(dto: AuthDto): Promise<User> {
    const response = await axiosWithAuth.post<AuthResponse>(
      `${this._baseUrl}/login`,
      dto,
    );

    const user = this._extractUserFromResponse(response.data);

    return user;
  }

  public async authMe(): Promise<User> {
    const response = await axiosWithAuth.post<AuthResponse>(
      `${this._baseUrl}/auth-me`,
    );

    const user = this._extractUserFromResponse(response.data);

    return user;
  }

  public async logout(): Promise<boolean> {
    const response = await axiosWithAuth.post<boolean>(
      `${this._baseUrl}/logout`,
    );

    return response.data;
  }

  private _extractUserFromResponse(response: AuthResponse) {
    const { accessToken, user } = response;

    this._checkUserRole(user.role);

    saveAccessToken(accessToken);

    return user;
  }

  private _checkUserRole(role: string) {
    if (role !== 'ADMIN') {
      removeAccessToken();
      throw new Error('Нет доступа!');
    }
  }
}

export const authService = new AuthService();
