import { FC, ReactNode } from 'react';
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
    <div className="bg-red-50 shadow-sm p-3 rounded-lg flex justify-between items-center">
      {category.title}
      <div className="flex items-center gap-2">
        {updateButtonSlot}
        {deleteButtonSlot}
      </div>
    </div>
  );
};

export default CategoryCard;
