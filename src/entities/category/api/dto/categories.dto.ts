import { MessageResponse } from '@/shared/types/message-response';
import { Category } from '../../model/types';

export interface CreateCategoryDto {
  title: string;
}

export type UpdateCategoryDto = CreateCategoryDto;

export interface UpdateCategoryResponse extends MessageResponse {
  category: Category;
}
