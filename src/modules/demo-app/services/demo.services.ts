import { DATA_DUAN, DATA_SAMPLES } from "../data-sample";

export const getData = () => {
    return DATA_SAMPLES;
};
export const getDataDuAn = () => {
    return DATA_DUAN;
};
export const getDuAnDetail = (id:number) => {
    return DATA_DUAN.find((item) => item.Id === id)
};
export const IdMax = () =>  Math.max(...DATA_DUAN.map((da) => da.Id))
