import ThongTinNhanSu from '../components/QuanLyDuAn/ThongTinDuAn/NhanSu/collapseThongTinNhanSu';
import PhongBanDuAn from '../components/QuanLyDuAn/ThongTinDuAn/PhongBan/collapsePhongBan';
import ThongTinCoBan from '../components/QuanLyDuAn/ThongTinDuAn/ThongTinCoBan/cardThongTinCoBan';

const DuAnDetail: React.FC = () => {
  return (
    <>
      <ThongTinCoBan />
      <ThongTinNhanSu />
      <PhongBanDuAn/>
    </>
  );
};
export default DuAnDetail;
