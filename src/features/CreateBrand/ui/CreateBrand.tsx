import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateBrand } from '../model/useCreateBrand';

const CreateBrand = () => {
  const { createBrandHandler } = useCreateBrand();

  return (
    <TitleForm
      errorMessages={{
        notEmpty: 'Укажите корректное название бренда!',
        required: 'Укажите название бренда!',
      }}
      submitHandler={createBrandHandler}
      buttonText="Cоздать"
    />
  );
};

export default CreateBrand;
