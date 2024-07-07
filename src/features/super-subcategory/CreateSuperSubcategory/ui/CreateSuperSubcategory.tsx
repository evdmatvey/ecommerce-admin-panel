import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateSuperSubcategory } from '../model/useCreateSuperSubcategory';

const CreateSuperSubcategory = () => {
  const { createSuperSubcategoryHandler } = useCreateSuperSubcategory();

  return (
    <TitleForm
      submitHandler={createSuperSubcategoryHandler}
      errorMessages={{
        required: 'Укажите название супер подкатегории!',
        notEmpty: 'Укажите корректное название супер подкатегории!',
      }}
      buttonText="Создать"
    />
  );
};

export default CreateSuperSubcategory;
