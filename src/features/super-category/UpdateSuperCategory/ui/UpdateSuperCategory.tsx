import { FC } from 'react';
import {
  SuperCategoryWithSubcategories,
  superCategoryValidationConfig,
} from '@/entities/super-category';
import { Button } from '@/shared/ui/Button';
import { EditIcon } from '@/shared/ui/Icons';
import { Modal } from '@/shared/ui/Modal';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useUpdateSuperCategory } from '../model/useUpdateSuperSubcategory';
import SuperCategorySubcategories from './SuperCategorySubcategories';

interface UpdateSuperSubcategoryProps {
  superCategory: SuperCategoryWithSubcategories;
}

const UpdateSuperSubcategory: FC<UpdateSuperSubcategoryProps> = ({
  superCategory,
}) => {
  const {
    isOpen,
    subcategories,
    closeModalHandler,
    openModalHandler,
    updateSuperCategoryHandler,
  } = useUpdateSuperCategory(superCategory.id);

  return (
    <>
      <Button onClick={openModalHandler} isIconOnly>
        <EditIcon />
      </Button>
      {isOpen && (
        <Modal closeHandler={closeModalHandler}>
          <div className="w-[1100px] flex flex-col gap-5">
            <h3 className="font-semibold">Супер категория</h3>
            <TitleForm
              submitHandler={updateSuperCategoryHandler}
              buttonText="Обновить"
              errorMessages={superCategoryValidationConfig}
              value={superCategory.title}
            />
            <h3 className="font-semibold">Подкатегории</h3>
            <SuperCategorySubcategories
              subcategories={subcategories}
              superCategory={superCategory}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateSuperSubcategory;
