import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateCategory } from '../model/useCreateCategory';

const CreateCategory = () => {
  const { createCategoryHandler } = useCreateCategory();

  return (
    <TitleForm
      errorMessages={{
        notEmpty: 'Укажите корректное название категории!',
        required: 'Укажите название категории!',
      }}
      submitHandler={createCategoryHandler}
      buttonText="Cоздать"
    />
  );
};

export default CreateCategory;
