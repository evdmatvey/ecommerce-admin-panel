import { MessageResponse } from '@/shared/types/message-response';
import { Brand } from '../../model/types';

export interface CreateBrandDto {
  title: string;
}

export interface CreateBrandyResponse extends MessageResponse {
  brand: Brand;
}

export type UpdateBrandDto = CreateBrandDto;
export type UpdateBrandResponse = CreateBrandyResponse;
