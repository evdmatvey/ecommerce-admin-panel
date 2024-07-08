import { MessageResponse } from '@/shared/types/message-response';
import { SuperCategory } from '../../model/types';

export interface CreateSuperCategoryDto {
  title: string;
}

export type UpdateSuperCategoryDto = CreateSuperCategoryDto;

export interface AddSubcategoryToSuperCategoryDto {
  id: string;
}

export type RemoveSubcategoryFromSuperCategoryDto =
  AddSubcategoryToSuperCategoryDto;

export interface CreateSuperCategoryResponse extends MessageResponse {
  superCategory: SuperCategory;
}

export type UpdateSuperCategoryResponse = CreateSuperCategoryResponse;
