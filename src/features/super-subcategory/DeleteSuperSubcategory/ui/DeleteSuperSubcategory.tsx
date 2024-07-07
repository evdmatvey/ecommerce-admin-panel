import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useDeleteSuperSubcategory } from '../model/useDeleteSuperSubcategory';

interface DeleteSuperSubcategoryProps {
  id: string;
}

const DeleteSuperSubcategory: FC<DeleteSuperSubcategoryProps> = ({ id }) => {
  const { deleteSuperSubcategoryHandler } = useDeleteSuperSubcategory(id);

  return (
    <Button onClick={deleteSuperSubcategoryHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteSuperSubcategory;
