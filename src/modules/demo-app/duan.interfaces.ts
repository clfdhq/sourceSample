export interface DuAn {
  Id: number;
  ProjectCode: string;
  Title: string;
  ProjectCategoryId: number[];
  Year: number;
  ProjectSize?: string;
  ProjectDescription?: string;
  Location?: string;
  Region?: string;
  ProjectStatus?: string;

  ProjectManager?: string;
  SiteSecretary?: string;
  FinanceDirector?: string;
  Director?: string;

  ChuDauTu?: string;
  NguoiDaiDienChuDauTu?: string;
  NguoiLienHeChuDauTu?: string;
  DiaChiLienHeChuDauTu?: string;
  SoDienThoaiChuDauTu?: string;
  EmailChuDauTu?: string;
  NhaThauChinh?: string;
  NguoiDaiDienNhaThau?: string;
  NguoiLienHeNhaThau?: string;
  DiaChiLienHeNhaThau?: string;
  SoDienThoaiNhaThau?: string;
  EmailNhaThau?: string;

  NgayNhanThongTinThau?: string;
  PhucDap?: boolean;
  NguoiThucHien?: string;
  NgayThucHien?: string;
  NgayNhanHoSoThau?: string;
  DiaDiemPhatHoSo?: string;
  BaoDamDuThau?: boolean;
  LoaiTien?: string;
  GiaTriSoBo?: number;
  TienDo?: string;
  LuuYDacBiet?: string;
  NgayGioNopThau?: string;
  CachThucNopThau?: string;
  NgonNgu?: string;
  NoiNopThau?: string;
  NguoiNhanHoSoThau?: string;
  NgayGioMoThau?: string;
  DiaDiemMoThau?: string;
}
