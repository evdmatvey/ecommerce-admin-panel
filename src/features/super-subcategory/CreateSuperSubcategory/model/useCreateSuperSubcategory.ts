import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  CreateSuperSubcategoryDto,
  superSubcategoryService,
} from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useCreateSuperSubcategory = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: CreateSuperSubcategoryDto) =>
      superSubcategoryService.create(data),
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['super-subcategories'] });
    },
    onError(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(`Ошибка: ${errorMessage}`);
    },
  });

  const createSuperSubcategoryHandler = (data: CreateSuperSubcategoryDto) =>
    mutate(data);

  return { createSuperSubcategoryHandler };
};
