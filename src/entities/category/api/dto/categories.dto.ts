import { MessageResponse } from '@/shared/types/message-response';
import { Category } from '../../model/types';

export interface CreateCategoryDto {
  title: string;
}

export type UpdateCategoryDto = CreateCategoryDto;

export interface CreateCategoryResponse extends MessageResponse {
  category: Category;
}

export type UpdateCategoryResponse = CreateCategoryResponse;
