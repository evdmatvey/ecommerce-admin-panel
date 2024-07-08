import { MessageResponse } from '@/shared/types/message-response';
import { SuperSubcategory } from '../../model/types';

export interface CreateSuperSubcategoryDto {
  title: string;
}

export type UpdateSuperSubcategoryDto = CreateSuperSubcategoryDto;

export interface AddCategoryToSuperSubcategoryDto {
  id: string;
}

export type RemoveCategoryFromSuperSubcategoryDto =
  AddCategoryToSuperSubcategoryDto;

export interface CreateSuperSubcategoryResponse extends MessageResponse {
  superSubcategory: SuperSubcategory;
}

export type UpdateSuperSubcategoryResponse = CreateSuperSubcategoryResponse;
