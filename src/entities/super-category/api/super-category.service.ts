import { axiosWithAuth } from '@/shared/libs/axios';
import { MessageResponse } from '@/shared/types/message-response';
import { SuperCategoryWithSubcategories } from '../model/types';
import {
  AddSubcategoryToSuperCategoryDto,
  CreateSuperCategoryDto,
  CreateSuperCategoryResponse,
  RemoveSubcategoryFromSuperCategoryDto,
  UpdateSuperCategoryDto,
  UpdateSuperCategoryResponse,
} from './dto/super-categories.dto';

class SuperCategoryService {
  private readonly _baseUrl: string = '/super-category';

  public async create(
    dto: CreateSuperCategoryDto,
  ): Promise<CreateSuperCategoryResponse> {
    const response = await axiosWithAuth.post<CreateSuperCategoryResponse>(
      this._baseUrl,
      dto,
    );

    return response.data;
  }

  public async getAll(): Promise<SuperCategoryWithSubcategories[]> {
    const response = await axiosWithAuth.get<SuperCategoryWithSubcategories[]>(
      this._baseUrl,
    );

    return response.data;
  }

  public async update(
    id: string,
    dto: UpdateSuperCategoryDto,
  ): Promise<UpdateSuperCategoryResponse> {
    const response = await axiosWithAuth.put<UpdateSuperCategoryResponse>(
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

  public async addSubcategory(
    id: string,
    dto: AddSubcategoryToSuperCategoryDto,
  ): Promise<MessageResponse> {
    const response = await axiosWithAuth.post<MessageResponse>(
      `${this._baseUrl}/add/${id}`,
      dto,
    );

    return response.data;
  }

  public async removeSubcategory(
    id: string,
    dto: RemoveSubcategoryFromSuperCategoryDto,
  ): Promise<MessageResponse> {
    const response = await axiosWithAuth.post<MessageResponse>(
      `${this._baseUrl}/remove/${id}`,
      dto,
    );

    return response.data;
  }
}

export const superCategoryService = new SuperCategoryService();
