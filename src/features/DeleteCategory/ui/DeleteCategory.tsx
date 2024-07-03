import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useDeleteCategory } from '../model/useDeleteCategory';

interface DeleteCategoryProps {
  id: string;
}

const DeleteCategory: FC<DeleteCategoryProps> = ({ id }) => {
  const { deleteCategoryHandler } = useDeleteCategory(id);

  return (
    <Button onClick={deleteCategoryHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteCategory;
