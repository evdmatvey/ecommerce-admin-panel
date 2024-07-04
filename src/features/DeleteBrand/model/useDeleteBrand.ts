import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { brandService } from '@/entities/brand';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useDeleteBrand = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => brandService.delete(id),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    },
  });

  const deleteBrandHandler = () => mutate();

  return { deleteBrandHandler };
};
