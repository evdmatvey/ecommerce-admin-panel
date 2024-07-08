import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superCategoryService } from '@/entities/super-category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useRemoveSubcategory = (
  superCategoryId: string,
  superSubcategoryId: string,
) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      superCategoryService.removeSubcategory(superCategoryId, {
        id: superSubcategoryId,
      }),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['super-categories'] });
      toast.success(data.message);
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const removeSubcategoryHandler = () => mutate();

  return { removeSubcategoryHandler };
};
