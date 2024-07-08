import { FC } from 'react';
import { Category, categoryValidationConfig } from '@/entities/category';
import { Button } from '@/shared/ui/Button';
import { EditIcon } from '@/shared/ui/Icons';
import { Modal } from '@/shared/ui/Modal';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useUpdateCategory } from '../model/useUpdateCategory';

interface UpdateCategoryProps {
  category: Category;
}

const UpdateCategory: FC<UpdateCategoryProps> = ({ category }) => {
  const { isOpen, closeModalHandler, openModalHandler, updateCategoryHandler } =
    useUpdateCategory(category.id);

  return (
    <>
      <Button onClick={openModalHandler} isIconOnly>
        <EditIcon />
      </Button>
      {isOpen && (
        <Modal closeHandler={closeModalHandler}>
          <TitleForm
            submitHandler={updateCategoryHandler}
            buttonText="Обновить"
            errorMessages={categoryValidationConfig}
            value={category.title}
          />
        </Modal>
      )}
    </>
  );
};

export default UpdateCategory;
