import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { DeleteIcon } from '@/shared/ui/Icons';
import { useRemoveSubcategory } from '../model/useRemoveSubcategory';

interface RemoveSubcategoryProps {
  superCategoryId: string;
  superSubcategoryId: string;
}

const RemoveSubcategory: FC<RemoveSubcategoryProps> = ({
  superCategoryId,
  superSubcategoryId,
}) => {
  const { removeSubcategoryHandler } = useRemoveSubcategory(
    superCategoryId,
    superSubcategoryId,
  );

  return (
    <Button onClick={removeSubcategoryHandler} isIconOnly>
      <DeleteIcon />
    </Button>
  );
};

export default RemoveSubcategory;
