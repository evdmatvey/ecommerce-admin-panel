import { FC } from 'react';
import { SuperSubcategoryWithCategories } from '@/entities/super-subcategory';
import { Button } from '@/shared/ui/Button';
import { EditIcon } from '@/shared/ui/Icons';
import { Modal } from '@/shared/ui/Modal';
import { TitleForm } from '@/shared/ui/TitleForm';
import { useUpdateSuperSubcategory } from '../model/useUpdateSuperSubcategory';
import SuperSubcategoryCategories from './SuperSubcategoryCategories';

interface UpdateSuperSubcategoryProps {
  superSubcategory: SuperSubcategoryWithCategories;
}

const UpdateSuperSubcategory: FC<UpdateSuperSubcategoryProps> = ({
  superSubcategory,
}) => {
  const {
    isOpen,
    categories,
    closeModalHandler,
    openModalHandler,
    updateSuperSubcategoryHandler,
  } = useUpdateSuperSubcategory(superSubcategory.id);

  return (
    <>
      <Button onClick={openModalHandler} isIconOnly>
        <EditIcon />
      </Button>
      {isOpen && (
        <Modal closeHandler={closeModalHandler}>
          <div className="w-[1100px] flex flex-col gap-5">
            <h3 className="font-semibold">Супер подкатегория</h3>
            <TitleForm
              submitHandler={updateSuperSubcategoryHandler}
              buttonText="Обновить"
              errorMessages={{
                notEmpty: 'Укажите корректное название супер подкатегории!',
                required: 'Укажите название супер подкатегории!',
              }}
              value={superSubcategory.title}
            />
            <h3 className="font-semibold">Категории</h3>
            <SuperSubcategoryCategories
              categories={categories}
              superSubcategory={superSubcategory}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateSuperSubcategory;
