import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { UpdateCategoryDto, categoryService } from '@/entities/category';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';
import { useModal } from '@/shared/ui/Modal';

export const useUpdateCategory = (id: string) => {
  const { isOpen, closeModalHandler, openModalHandler } = useModal();

  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      categoryService.update(id, { title }),
  });

  const updateCategoryHandler = (data: UpdateCategoryDto) =>
    mutate(
      { ...data, id },
      {
        onSuccess(data) {
          toast.success(data.message);
          queryClint.invalidateQueries({ queryKey: ['categories'] });
          closeModalHandler();
        },
        onError(error) {
          const errorMessage = getErrorMessage(error);
          toast.error(`Ошибка: ${errorMessage}`);
        },
      },
    );

  return { isOpen, closeModalHandler, openModalHandler, updateCategoryHandler };
};
