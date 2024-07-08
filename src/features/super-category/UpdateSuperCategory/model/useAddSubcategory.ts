import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superCategoryService } from '@/entities/super-category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useAddSubcategory = (
  superCategoryId: string,
  superSubcategoryId: string,
) => {
  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      superCategoryService.addSubcategory(superCategoryId, {
        id: superSubcategoryId,
      }),
    onSuccess(data) {
      queryClint.invalidateQueries({ queryKey: ['super-categories'] });
      toast.success(data.message);
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const addSubcategoryHandler = () => mutate();

  return { addSubcategoryHandler };
};
