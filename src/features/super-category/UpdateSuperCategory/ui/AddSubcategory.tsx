import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { AddIcon } from '@/shared/ui/Icons';
import { useAddSubcategory } from '../model/useAddSubcategory';

interface AddSubcategoryProps {
  superCategoryId: string;
  superSubcategoryId: string;
}

const AddSubcategory: FC<AddSubcategoryProps> = ({
  superCategoryId,
  superSubcategoryId,
}) => {
  const { addSubcategoryHandler } = useAddSubcategory(
    superCategoryId,
    superSubcategoryId,
  );

  return (
    <Button onClick={addSubcategoryHandler} isIconOnly>
      <AddIcon />
    </Button>
  );
};

export default AddSubcategory;
