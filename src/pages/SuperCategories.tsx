import SuperCategoriesList from '@/widgets/SuperCategoriesList/ui/SuperCategoriesList';
import { CreateSuperCategory } from '@/features/super-category/CreateSuperCategory';

const SuperCategories = () => {
  return (
    <>
      <h1 className="font-semibold mb-5">Супер категории</h1>
      <div className="mb-5">
        <CreateSuperCategory />
      </div>
      <SuperCategoriesList />
    </>
  );
};

export default SuperCategories;
