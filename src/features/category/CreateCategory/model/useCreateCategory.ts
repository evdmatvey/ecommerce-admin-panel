import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { CreateCategoryDto, categoryService } from '@/entities/category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateCategoryDto) => categoryService.create(data),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(`Ошибка: ${errorMessage}`);
    },
  });

  const createCategoryHandler = (data: CreateCategoryDto) => mutate(data);

  return { createCategoryHandler };
};
