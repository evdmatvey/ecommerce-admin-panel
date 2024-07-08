import { superSubcategoryValidationConfig } from '@/entities/super-subcategory';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateSuperSubcategory } from '../model/useCreateSuperSubcategory';

const CreateSuperSubcategory = () => {
  const { createSuperSubcategoryHandler } = useCreateSuperSubcategory();

  return (
    <TitleForm
      submitHandler={createSuperSubcategoryHandler}
      errorMessages={superSubcategoryValidationConfig}
      buttonText="Создать"
    />
  );
};

export default CreateSuperSubcategory;
