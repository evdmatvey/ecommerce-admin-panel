import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateSuperCategory } from '../model/useCreateSuperCategory';

const CreateSuperCategory = () => {
  const { createSuperCategoryHandler } = useCreateSuperCategory();

  return (
    <TitleForm
      submitHandler={createSuperCategoryHandler}
      errorMessages={{
        required: 'Укажите название супер категории!',
        notEmpty: 'Укажите корректное название супер категории!',
      }}
      buttonText="Создать"
    />
  );
};

export default CreateSuperCategory;
