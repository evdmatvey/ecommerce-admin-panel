import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superCategoryService } from '@/entities/super-category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useDeleteSuperCategory = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => superCategoryService.delete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['super-categories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const deleteSuperCategoryHandler = () => mutate();

  return { deleteSuperCategoryHandler };
};
