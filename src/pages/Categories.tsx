import { CategoriesList } from '@/widgets/CategoriesList';
import { CreateCategory } from '@/features/CreateCategory';

const Categories = () => {
  return (
    <>
      <h1 className="font-semibold mb-5">Категории</h1>
      <div className="mb-5">
        <CreateCategory />
      </div>
      <CategoriesList />
    </>
  );
};
export default Categories;
