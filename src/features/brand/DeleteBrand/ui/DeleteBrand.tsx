import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useDeleteBrand } from '../model/useDeleteBrand';

interface DeleteBrandProps {
  id: string;
}

const DeleteBrand: FC<DeleteBrandProps> = ({ id }) => {
  const { deleteBrandHandler } = useDeleteBrand(id);

  return (
    <Button onClick={deleteBrandHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteBrand;
