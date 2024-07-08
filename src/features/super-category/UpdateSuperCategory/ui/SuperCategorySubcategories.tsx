import { FC } from 'react';
import { SuperCategoryWithSubcategories } from '@/entities/super-category';
import { SuperSubcategory } from '@/entities/super-subcategory';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';
import AddSubcategory from './AddSubcategory';
import RemoveSubcategory from './RemoveSubcategory';

interface SuperCategorySubcategoriesProps {
  superCategory: SuperCategoryWithSubcategories;
  subcategories: SuperSubcategory[] | undefined;
}
const SuperCategorySubcategories: FC<SuperCategorySubcategoriesProps> = ({
  superCategory,
  subcategories,
}) => {
  const skeletons = new Array(18).fill(<TitleOnlyCardSkeleton />);

  if (!subcategories)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((skeleton, index) => <li key={index}>{skeleton}</li>)}
      </ul>
    );

  return (
    <>
      <ul className="grid grid-cols-3 gap-3">
        {subcategories?.map((subcategory) => (
          <li key={subcategory.id}>
            <TitleOnlyCard
              data={subcategory}
              controlsSlot={
                superCategory.subcategories.some(
                  (item) => item.id === subcategory.id,
                ) ? (
                  <RemoveSubcategory
                    superCategoryId={superCategory.id}
                    superSubcategoryId={subcategory.id}
                  />
                ) : (
                  <AddSubcategory
                    superCategoryId={superCategory.id}
                    superSubcategoryId={subcategory.id}
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

export default SuperCategorySubcategories;
