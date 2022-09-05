import { Order} from '../../../../api/api.type';
import axiosInstance from '../../../axios.instance';

export const checkIsLoadMore = (page: number, startPage: number): boolean => {
  return page > startPage;
};

export const getOrderDetail = (
  id: string,  
) => {
  return axiosInstance.get<Order>(
    `/store/order/${id}` 
  );
};
export const addOrder = (item: Order) => {
  return axiosInstance.post<Order>(`/store/order`, item);
};
// export const editOrder = (id: string, item: Order) => {
//   return axiosInstance.post<Order>(`/store/order/`, item);
// };
export const deleteOrder = (id: string) => {
  return axiosInstance.delete(`/store/order/${id}`);
};
export const getInventory = () => {
  return axiosInstance.get<{}>('/store/inventory')
}