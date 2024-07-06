import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { CreateBrandDto, brandService } from '@/entities/brand';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useCreateBrand = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateBrandDto) => brandService.create(data),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(`Ошибка: ${errorMessage}`);
    },
  });

  const createBrandHandler = (data: CreateBrandDto) => mutate(data);

  return { createBrandHandler };
};
