import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superSubcategoryService } from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useAddCategory = (
  superSubcategoryId: string,
  categoryId: string,
) => {
  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      superSubcategoryService.addCategory(superSubcategoryId, {
        id: categoryId,
      }),
    onSuccess(data) {
      queryClint.invalidateQueries({ queryKey: ['super-subcategories'] });
      toast.success(data.message);
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const addCategoryHandler = () => mutate();

  return { addCategoryHandler };
};
