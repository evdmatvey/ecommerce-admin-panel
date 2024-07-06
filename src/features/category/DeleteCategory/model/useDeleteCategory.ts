import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { categoryService } from '@/entities/category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useDeleteCategory = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => categoryService.delete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const deleteCategoryHandler = () => mutate();

  return { deleteCategoryHandler };
};
