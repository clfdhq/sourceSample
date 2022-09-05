import { Collapse } from 'antd';

import { useEffect, useState } from 'react';
import ThongTinNhanSu from '../components/QuanLyDuAn/ThongTinDuAn/NhanSu/collapseThongTinNhanSu';
import PhongBanDuAn from '../components/QuanLyDuAn/ThongTinDuAn/PhongBan/collapsePhongBan';
import ThongTinCoBan from '../components/QuanLyDuAn/ThongTinDuAn/ThongTinCoBan/cardThongTinCoBan';
import { DuAn } from '../duan.interfaces';
import { getDataDuAn } from '../services/demo.services';

const DuAnDetail: React.FC = () => {
  const { Panel } = Collapse;
  return (
    <>
      <ThongTinCoBan />
      <ThongTinNhanSu />
      <PhongBanDuAn/>
    </>
  );
};
export default DuAnDetail;
