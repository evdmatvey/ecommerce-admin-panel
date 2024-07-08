import { categoryValidationConfig } from '@/entities/category';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateCategory } from '../model/useCreateCategory';

const CreateCategory = () => {
  const { createCategoryHandler } = useCreateCategory();

  return (
    <TitleForm
      errorMessages={categoryValidationConfig}
      submitHandler={createCategoryHandler}
      buttonText="Cоздать"
    />
  );
};

export default CreateCategory;
