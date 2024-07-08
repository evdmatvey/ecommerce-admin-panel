import { SuperSubcategory } from '@/entities/super-subcategory';

export interface SuperCategory {
  id: string;
  title: string;
}

export interface SuperCategoryWithSubcategories extends SuperCategory {
  subcategories: SuperSubcategory[];
}
