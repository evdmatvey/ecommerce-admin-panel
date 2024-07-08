import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { superSubcategoryService } from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useDeleteSuperSubcategory = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => superSubcategoryService.delete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['super-subcategories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const deleteSuperSubcategoryHandler = () => mutate();

  return { deleteSuperSubcategoryHandler };
};
