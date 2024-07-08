import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useDeleteSuperCategory } from '../model/useDeleteSuperCategory';

interface DeleteSuperSubcategoryProps {
  id: string;
}

const DeleteSuperSubcategory: FC<DeleteSuperSubcategoryProps> = ({ id }) => {
  const { deleteSuperCategoryHandler } = useDeleteSuperCategory(id);

  return (
    <Button onClick={deleteSuperCategoryHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteSuperSubcategory;
