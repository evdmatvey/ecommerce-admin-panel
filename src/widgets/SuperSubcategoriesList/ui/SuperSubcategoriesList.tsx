import { useQuery } from '@tanstack/react-query';
import { DeleteSuperSubcategory } from '@/features/super-subcategory/DeleteSuperSubcategory';
import { UpdateSuperSubcategory } from '@/features/super-subcategory/UpdateSuperSubcategory';
import { superSubcategoryService } from '@/entities/super-subcategory';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';

const SuperSubcategoriesList = () => {
  const { data } = useQuery({
    queryKey: ['super-subcategories'],
    queryFn: () => superSubcategoryService.getAll(),
  });

  const skeletons = new Array(18).fill(<TitleOnlyCardSkeleton />);

  if (!data)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((skeleton, index) => <li key={index}>{skeleton}</li>)}
      </ul>
    );

  return (
    <ul className="grid grid-cols-3 gap-5">
      {data?.map((superSubcategory) => (
        <li key={superSubcategory.id}>
          <TitleOnlyCard
            data={superSubcategory}
            controlsSlot={
              <>
                <UpdateSuperSubcategory superSubcategory={superSubcategory} />
                <DeleteSuperSubcategory id={superSubcategory.id} />
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default SuperSubcategoriesList;
