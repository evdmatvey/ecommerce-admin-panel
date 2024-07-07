import { FC } from 'react';
import { Category } from '@/entities/category';
import { SuperSubcategoryWithCategories } from '@/entities/super-subcategory';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';
import AddCategory from './AddCategory';
import RemoveCategory from './RemoveCategory';

interface SuperSubcategoryCategoriesProps {
  superSubcategory: SuperSubcategoryWithCategories;
  categories: Category[] | undefined;
}
const SuperSubcategoryCategories: FC<SuperSubcategoryCategoriesProps> = ({
  superSubcategory,
  categories,
}) => {
  const skeletons = new Array(18).fill(<TitleOnlyCardSkeleton />);

  if (!categories)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((skeleton, index) => <li key={index}>{skeleton}</li>)}
      </ul>
    );

  return (
    <>
      <ul className="grid grid-cols-3 gap-3">
        {categories?.map((category) => (
          <li key={category.id}>
            <TitleOnlyCard
              data={category}
              controlsSlot={
                superSubcategory.categories.some(
                  (item) => item.id === category.id,
                ) ? (
                  <RemoveCategory
                    categoryId={category.id}
                    superSubcategoryId={superSubcategory.id}
                  />
                ) : (
                  <AddCategory
                    categoryId={category.id}
                    superSubcategoryId={superSubcategory.id}
                  />
                )
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SuperSubcategoryCategories;
