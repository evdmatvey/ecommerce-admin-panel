import { axiosWithAuth } from '@/shared/libs/axios';
import { MessageResponse } from '@/shared/types/message-response';
import { SuperSubcategoryWithCategories } from '../model/types';
import {
  AddCategoryToSuperSubcategoryDto,
  CreateSuperSubcategoryDto,
  CreateSuperSubcategoryResponse,
  RemoveCategoryFromSuperSubcategoryDto,
  UpdateSuperSubcategoryDto,
  UpdateSuperSubcategoryResponse,
} from './dto/super-subcategories.dto';

class SuperSubcategoryService {
  private readonly _baseUrl: string = '/super-subcategory';

  public async create(
    dto: CreateSuperSubcategoryDto,
  ): Promise<CreateSuperSubcategoryResponse> {
    const response = await axiosWithAuth.post<CreateSuperSubcategoryResponse>(
      this._baseUrl,
      dto,
    );

    return response.data;
  }

  public async getAll(): Promise<SuperSubcategoryWithCategories[]> {
    const response = await axiosWithAuth.get<SuperSubcategoryWithCategories[]>(
      this._baseUrl,
    );

    return response.data;
  }

  public async update(
    id: string,
    dto: UpdateSuperSubcategoryDto,
  ): Promise<UpdateSuperSubcategoryResponse> {
    const response = await axiosWithAuth.put<UpdateSuperSubcategoryResponse>(
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

  public async addCategory(
    id: string,
    dto: AddCategoryToSuperSubcategoryDto,
  ): Promise<MessageResponse> {
    const response = await axiosWithAuth.post<MessageResponse>(
      `${this._baseUrl}/add/${id}`,
      dto,
    );

    return response.data;
  }

  public async removeCategory(
    id: string,
    dto: RemoveCategoryFromSuperSubcategoryDto,
  ): Promise<MessageResponse> {
    const response = await axiosWithAuth.post<MessageResponse>(
      `${this._baseUrl}/remove/${id}`,
      dto,
    );

    return response.data;
  }
}

export const superSubcategoryService = new SuperSubcategoryService();
