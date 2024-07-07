import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { categoryService } from '@/entities/category';
import {
  UpdateSuperSubcategoryDto,
  superSubcategoryService,
} from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';
import { useModal } from '@/shared/ui/Modal';

export const useUpdateSuperSubcategory = (id: string) => {
  const { isOpen, closeModalHandler, openModalHandler } = useModal();

  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (dto: UpdateSuperSubcategoryDto) =>
      superSubcategoryService.update(id, dto),
  });
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getAll(),
  });

  const updateSuperSubcategoryHandler = (data: UpdateSuperSubcategoryDto) =>
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
        queryClint.invalidateQueries({ queryKey: ['super-subcategories'] });
        closeModalHandler();
      },
      onError(error) {
        const errorMessage = getErrorMessage(error);
        toast.error(`Ошибка: ${errorMessage}`);
      },
    });

  return {
    isOpen,
    categories,
    closeModalHandler,
    openModalHandler,
    updateSuperSubcategoryHandler,
  };
};
