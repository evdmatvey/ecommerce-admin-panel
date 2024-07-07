import { SuperSubcategoriesList } from '@/widgets/SuperSubcategoriesList';
import { CreateSuperSubcategory } from '@/features/super-subcategory/CreateSuperSubcategory';

const SuperSubcategories = () => {
  return (
    <>
      <h1 className="font-semibold mb-5">Супер подкатегории</h1>
      <div className="mb-5">
        <CreateSuperSubcategory />
      </div>
      <SuperSubcategoriesList />
    </>
  );
};

export default SuperSubcategories;
