import { useQuery } from '@tanstack/react-query';
import { DeleteCategory } from '@/features/category/DeleteCategory';
import { UpdateCategory } from '@/features/category/UpdateCategory';
import { categoryService } from '@/entities/category';
import {
  TitleOnlyCard,
  TitleOnlyCardSkeleton,
} from '@/shared/ui/TitleOnlyCard';

const CategoriesList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getAll(),
  });

  const skeletons = new Array(18).fill(<TitleOnlyCardSkeleton />);

  if (isLoading)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((skeleton, index) => <li key={index}>{skeleton}</li>)}
      </ul>
    );

  return (
    <ul className="grid grid-cols-3 gap-5">
      {data?.map((category) => (
        <li key={category.id}>
          <TitleOnlyCard
            data={category}
            controlsSlot={
              <>
                <UpdateCategory category={category} />
                <DeleteCategory id={category.id} />
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
