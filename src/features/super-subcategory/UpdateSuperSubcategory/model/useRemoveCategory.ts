import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superSubcategoryService } from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useRemoveCategory = (
  superSubcategoryId: string,
  categoryId: string,
) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      superSubcategoryService.removeCategory(superSubcategoryId, {
        id: categoryId,
      }),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['super-subcategories'] });
      toast.success(data.message);
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const removeCategoryHandler = () => mutate();

  return { removeCategoryHandler };
};
