import { FC } from 'react';
import { Brand } from '@/entities/brand';
import { Button } from '@/shared/ui/Button';
import { EditIcon } from '@/shared/ui/Icons';
import { Modal } from '@/shared/ui/Modal';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useUpdateBrand } from '../model/useUpdateBrand';

interface UpdateBrandProps {
  brand: Brand;
}

const UpdateBrand: FC<UpdateBrandProps> = ({ brand }) => {
  const { isOpen, closeModalHandler, openModalHandler, updateBrandHandler } =
    useUpdateBrand(brand.id);

  return (
    <>
      <Button onClick={openModalHandler} isIconOnly>
        <EditIcon />
      </Button>
      {isOpen && (
        <Modal closeHandler={closeModalHandler}>
          <TitleForm
            submitHandler={updateBrandHandler}
            buttonText="Обновить"
            errorMessages={{
              notEmpty: 'Укажите корректное название категории!',
              required: 'Укажите название категории!',
            }}
            value={brand.title}
          />
        </Modal>
      )}
    </>
  );
};

export default UpdateBrand;
