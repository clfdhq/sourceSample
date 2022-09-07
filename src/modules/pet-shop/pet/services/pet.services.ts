import { Category, Pet, Tag } from '../../../../api/api.type';
import axiosInstance from '../../../axios.instance';


export const checkIsLoadMore = (page: number, startPage: number): boolean => {
  return page > startPage;
};

export const getPetDetail = (
  id: number,  
) => {
  return axiosInstance.get<Pet>(
    `/pet/${id}` 
  );
};
export const getPetListByStatus = (status:string   
  ) => {
    return axiosInstance.get<Pet[]>(`pet/findByStatus?status=${status}`);
  };

export const addPet = (item: Pet) => {
  return axiosInstance.post<Pet>(`/pet`, item);
};
export const editPet = (id: string, item: Pet) => {
  return axiosInstance.post<Pet>(`/pet`, item);
};

export const deletePet = (id: string) => {
  return axiosInstance.delete(`/pet/${id}`);
};


export const PetCategory: Category[] = [
  { id: 10, name: 'Real' },
  { id: 9, name: 'Fantasy' },
  { id: 8, name: 'Art' },
];
export const PetTag: Tag[] = [
  { id: 10, name: 'Big' },
  { id: 9, name: 'Nomal' },
  { id: 8, name: 'Small' },
  { id: 7, name: 'Like human' },
  { id: 3, name: 'Fig' },
  { id: 4, name: 'Land' },
  { id: 5, name: 'Bird' },
];