import { Pet } from '../../../api/api.type';
import axiosInstance from '../../axios.instance';


export const checkIsLoadMore = (page: number, startPage: number): boolean => {
  return page > startPage;
};

export const getPetDetail = (
  id: string,  
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