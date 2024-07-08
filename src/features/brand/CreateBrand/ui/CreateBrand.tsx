import { brandValidationConfig } from '@/entities/brand';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useCreateBrand } from '../model/useCreateBrand';

const CreateBrand = () => {
  const { createBrandHandler } = useCreateBrand();

  return (
    <TitleForm
      errorMessages={brandValidationConfig}
      submitHandler={createBrandHandler}
      buttonText="Cоздать"
    />
  );
};

export default CreateBrand;
