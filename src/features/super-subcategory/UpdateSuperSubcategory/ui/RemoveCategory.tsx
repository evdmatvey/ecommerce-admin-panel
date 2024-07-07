import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useRemoveCategory } from '../model/useRemoveCategory';

interface RemoveCategoryProps {
  superSubcategoryId: string;
  categoryId: string;
}

const RemoveCategory: FC<RemoveCategoryProps> = ({
  categoryId,
  superSubcategoryId,
}) => {
  const { removeCategoryHandler } = useRemoveCategory(
    superSubcategoryId,
    categoryId,
  );

  return (
    <Button onClick={removeCategoryHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default RemoveCategory;
