import { superCategoryValidationConfig } from '@/entities/super-category';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateSuperCategory } from '../model/useCreateSuperCategory';

const CreateSuperCategory = () => {
  const { createSuperCategoryHandler } = useCreateSuperCategory();

  return (
    <TitleForm
      submitHandler={createSuperCategoryHandler}
      errorMessages={superCategoryValidationConfig}
      buttonText="Создать"
    />
  );
};

export default CreateSuperCategory;
