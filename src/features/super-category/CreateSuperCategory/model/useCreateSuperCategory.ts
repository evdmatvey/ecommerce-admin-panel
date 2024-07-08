import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  CreateSuperCategoryDto,
  superCategoryService,
} from '@/entities/super-category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useCreateSuperCategory = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateSuperCategoryDto) =>
      superCategoryService.create(data),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['super-categories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(`Ошибка: ${errorMessage}`);
    },
  });

  const createSuperCategoryHandler = (data: CreateSuperCategoryDto) =>
    mutate(data);

  return { createSuperCategoryHandler };
};
