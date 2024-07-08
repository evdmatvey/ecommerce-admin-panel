import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  UpdateSuperCategoryDto,
  superCategoryService,
} from '@/entities/super-category';
import { superSubcategoryService } from '@/entities/super-subcategory';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';
import { useModal } from '@/shared/ui/Modal';

export const useUpdateSuperCategory = (id: string) => {
  const { isOpen, closeModalHandler, openModalHandler } = useModal();

  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (dto: UpdateSuperCategoryDto) =>
      superCategoryService.update(id, dto),
  });
  const { data: subcategories } = useQuery({
    queryKey: ['super-subcategories'],
    queryFn: () => superSubcategoryService.getAll(),
  });

  const updateSuperCategoryHandler = (data: UpdateSuperCategoryDto) =>
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
        queryClint.invalidateQueries({ queryKey: ['super-categories'] });
        closeModalHandler();
      },
      onError(error) {
        const errorMessage = getErrorMessage(error);
        toast.error(`Ошибка: ${errorMessage}`);
      },
    });

  return {
    isOpen,
    subcategories,
    closeModalHandler,
    openModalHandler,
    updateSuperCategoryHandler,
  };
};
