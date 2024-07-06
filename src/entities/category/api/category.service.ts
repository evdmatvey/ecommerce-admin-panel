import { axiosWithAuth } from '@/shared/libs/axios';
import { MessageResponse } from '@/shared/types/message-response';
import { Category } from '../model/types';
import {
  CreateCategoryDto,
  CreateCategoryResponse,
  UpdateCategoryDto,
  UpdateCategoryResponse,
} from './dto/categories.dto';

class CategoryService {
  private readonly _baseUrl: string = '/category';

  public async create(dto: CreateCategoryDto): Promise<CreateCategoryResponse> {
    const response = await axiosWithAuth.post<CreateCategoryResponse>(
      this._baseUrl,
      dto,
    );

    return response.data;
  }

  public async getAll(): Promise<Category[]> {
    const response = await axiosWithAuth.get<Category[]>(this._baseUrl);

    return response.data;
  }

  public async update(
    id: string,
    dto: UpdateCategoryDto,
  ): Promise<UpdateCategoryResponse> {
    const response = await axiosWithAuth.put<UpdateCategoryResponse>(
      `${this._baseUrl}/${id}`,
      dto,
    );

    return response.data;
  }

  public async delete(id: string): Promise<MessageResponse> {
    const response = await axiosWithAuth.delete<MessageResponse>(
      `${this._baseUrl}/${id}`,
    );

    return response.data;
  }
}

export const categoryService = new CategoryService();
