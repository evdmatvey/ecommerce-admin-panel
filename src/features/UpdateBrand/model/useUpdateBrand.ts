import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { UpdateBrandDto, brandService } from '@/entities/brand';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';
import { useModal } from '@/shared/ui/Modal';

export const useUpdateBrand = (id: string) => {
  const { isOpen, closeModalHandler, openModalHandler } = useModal();

  const queryClint = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      brandService.update(id, { title }),
  });

  const updateBrandHandler = (data: UpdateBrandDto) =>
    mutate(
      { ...data, id },
      {
        onSuccess(data) {
          toast.success(data.message);
          queryClint.invalidateQueries({ queryKey: ['brands'] });
          closeModalHandler();
        },
        onError(error) {
          const errorMessage = getErrorMessage(error);
          toast.error(`Ошибка: ${errorMessage}`);
        },
      },
    );

  return { isOpen, closeModalHandler, openModalHandler, updateBrandHandler };
};
