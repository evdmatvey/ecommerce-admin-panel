import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { AddIcon } from '@/shared/ui/Icons';
import { useAddCategory } from '../model/useAddCategory';

interface AddCategoryProps {
  superSubcategoryId: string;
  categoryId: string;
}

const AddCategory: FC<AddCategoryProps> = ({
  categoryId,
  superSubcategoryId,
}) => {
  const { addCategoryHandler } = useAddCategory(superSubcategoryId, categoryId);

  return (
    <Button onClick={addCategoryHandler} isIconOnly>
      <AddIcon />
    </Button>
  );
};

export default AddCategory;
