import { axiosWithAuth } from '@/shared/libs/axios';
import { MessageResponse } from '@/shared/types/message-response';
import { Brand } from '../model/types';
import {
  CreateBrandDto,
  CreateBrandyResponse,
  UpdateBrandDto,
  UpdateBrandResponse,
} from './dto/brands.dto';

class BrandService {
  private readonly _baseUrl: string = '/brand';

  public async create(dto: CreateBrandDto): Promise<CreateBrandyResponse> {
    const response = await axiosWithAuth.post<CreateBrandyResponse>(
      this._baseUrl,
      dto,
    );

    return response.data;
  }

  public async getAll(): Promise<Brand[]> {
    const response = await axiosWithAuth.get<Brand[]>(this._baseUrl);

    return response.data;
  }

  public async update(
    id: string,
    dto: UpdateBrandDto,
  ): Promise<UpdateBrandResponse> {
    const response = await axiosWithAuth.put<UpdateBrandResponse>(
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

export const brandService = new BrandService();
