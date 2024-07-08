import { Category } from '@/entities/category';

export interface SuperSubcategory {
  id: string;
  title: string;
}

export interface SuperSubcategoryWithCategories extends SuperSubcategory {
  categories: Category[];
}
