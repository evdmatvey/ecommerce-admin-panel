import { FC, ReactNode } from 'react';
import { TitleOnlyCard } from '@/shared/ui/TitleOnlyCard';
import { Category } from '../model/types';

interface CategoryCardProps {
  category: Category;
  deleteButtonSlot?: ReactNode;
  updateButtonSlot?: ReactNode;
}

const CategoryCard: FC<CategoryCardProps> = ({
  category,
  deleteButtonSlot,
  updateButtonSlot,
}) => {
  return (
    <TitleOnlyCard
      data={category}
      deleteButtonSlot={deleteButtonSlot}
      updateButtonSlot={updateButtonSlot}
    />
  );
};

export default CategoryCard;
