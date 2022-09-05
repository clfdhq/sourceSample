import { DuAn } from '../../duan.interfaces';
export type setComponentVisible = (value: boolean) => void;
export type getData = () => void;
export interface DuAnProps {
  duAnDetail?: DuAn;
  isOpenComponent?: boolean;
  openComponent: setComponentVisible;
  getData: getData
}
