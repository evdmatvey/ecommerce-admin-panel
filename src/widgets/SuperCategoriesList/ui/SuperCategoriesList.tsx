import { useQuery } from '@tanstack/react-query';
import { DeleteSuperCategory } from '@/features/super-category/DeleteSuperCategory';
import { UpdateSuperCategory } from '@/features/super-category/UpdateSuperCategory';
import { superCategoryService } from '@/entities/super-category';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';

const SuperCategoriesList = () => {
  const { data } = useQuery({
    queryKey: ['super-categories'],
    queryFn: () => superCategoryService.getAll(),
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
      {data?.map((superCategory) => (
        <li key={superCategory.id}>
          <TitleOnlyCard
            data={superCategory}
            controlsSlot={
              <>
                <UpdateSuperCategory superCategory={superCategory} />
                <DeleteSuperCategory id={superCategory.id} />
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default SuperCategoriesList;
