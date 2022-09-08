import ChuDauTuNhaThau from '../components/QuanLyDuAn/ThongTinDuAn/ChuDauTu/collapseChuDauTu';
import ThongTinDauThau from '../components/QuanLyDuAn/ThongTinDuAn/DauThau/collapseDauThau';
import ThongTinNhanSu from '../components/QuanLyDuAn/ThongTinDuAn/NhanSu/collapseThongTinNhanSu';
import PhongBanDuAn from '../components/QuanLyDuAn/ThongTinDuAn/PhongBan/collapsePhongBan';
import ThongTinCoBan from '../components/QuanLyDuAn/ThongTinDuAn/ThongTinCoBan/cardThongTinCoBan';

const DuAnDetail: React.FC = () => {
  return (
    <>
      <ThongTinCoBan />
      <ThongTinNhanSu />
      <ChuDauTuNhaThau/>
      <ThongTinDauThau />
      <PhongBanDuAn/>
    </>
  );
};
export default DuAnDetail;
