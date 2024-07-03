import { useQuery } from '@tanstack/react-query';
import { DeleteCategory } from '@/features/DeleteCategory';
import { UpdateCategory } from '@/features/UpdateCategory';
import {
  CategoryCard,
  CategorySkeleton,
  categoryService,
} from '@/entities/category';

const CategoriesList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getAll(),
  });

  const skeletons = new Array(20).fill(<CategorySkeleton />);

  if (isLoading)
    return (
      <ul className="grid grid-cols-3 gap-5">
        {skeletons?.map((_, index) => (
          <li key={index}>
            <CategorySkeleton />
          </li>
        ))}
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
