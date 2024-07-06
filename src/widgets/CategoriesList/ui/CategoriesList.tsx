import { useQuery } from '@tanstack/react-query';
import { DeleteCategory } from '@/features/category/DeleteCategory';
import { UpdateCategory } from '@/features/category/UpdateCategory';
import { CategoryCard, categoryService } from '@/entities/category';
import { TitleOnlyCardSkeleton } from '@/shared/ui/TitleOnlyCard';

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
          <CategoryCard
            category={category}
            updateButtonSlot={<UpdateCategory category={category} />}
            deleteButtonSlot={<DeleteCategory id={category.id} />}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
