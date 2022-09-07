import { DataSample } from './demo.interfaces';
import { DuAn } from './duan.interfaces';

export const DATA_SAMPLES: DataSample[] = [...Array.from({ length: 12 }, (_, i) => i)].map((i) => ({
  id: `id34234${i}`,
  name: `Demo-${i}`,
}));

export class dropdownDuAn {
  ProjectCategory = [
    { Id: 1, value: 'Cơ khí', color: 'gray' },
    { Id: 2, value: 'Nhôm kính', color: 'green' },
    { Id: 3, value: 'Coppha nhôm', color: 'blue' },
  ];
  VungMien = [
    { Id: 1, value: 'Miền Bắc' },
    { Id: 2, value: 'Miền Trung' },
    { Id: 3, value: 'Miền Nam' },
    { Id: 4, value: 'Khác' },
  ];
  TinhTrang = [
    { Id: 1, value: 'Đang soạn thảo', color: 'gray'  },
    { Id: 2, value: 'Đang đấu thầu', color: 'processing' },
    { Id: 3, value: 'Trúng thầu', color: 'success' },
    { Id: 4, value: 'Nhận lại', color: 'warning'},
    { Id: 6, value: 'Không trúng', color: 'error' },
    { Id: 7, value: 'Chờ', color: 'processing' },
    { Id: 8, value: 'Khác', color: 'default' },
  ];
}

//Loai DuAn: "Cơ khí", "Nhôm kính", "Coppha nhôm"
export const DATA_DUAN: DuAn[] = [
  {
    Id: 1,
    ProjectCode: 'DA-342',
    Title: 'DA-342',
    ProjectCategoryId: [1],
    Year: 2021,
    ProjectStatus: 'Đang soạn thảo',
    Location: 'Thảo Điền, Quận 2'
  },
  {
    Id: 2,
    ProjectCode: 'DA-324',
    Title: 'DA-324',
    ProjectCategoryId: [2],
    Year: 2021,
    ProjectStatus: 'Nhận lại',
    Location: 'Xã Phong Phú, Huyện Bình Chánh, Tp. Hồ Chí Minh'
  },
  {
    Id: 3,
    ProjectCode: 'DA-213',
    Title: 'DA-213',
    ProjectCategoryId: [3],
    Year: 2021,
    ProjectStatus: 'Trúng thầu',
    Location: 'Khu Dân Cư Thủy Sinh, phường Phú Hữu, Quận 9, Hồ Chí Minh'
  },
  {
    Id: 4,
    ProjectCode: 'DA-356',
    Title: 'DA-356',
    ProjectCategoryId: [2, 3],
    Year: 2021,
    ProjectStatus: 'Không trúng',
    Location: 'Nhơn Trạch , Đồng Nai'
  },
  {
    Id: 5,
    ProjectCode: 'DA-998',
    Title: 'DA-998',
    ProjectCategoryId: [2, 3],
    Year: 2021,
    ProjectStatus: 'Đang đấu thầu',
    Location: 'ĐẢO ĐẠI PHƯỚC, XÃ ĐẠI PHƯỚC, HUYỆN NHƠN TRẠCH, TỈNH ĐỒNG NAI'
  },
];
export const DATA_NHANSU = [
  {
    DuAnId: 1,
    ProjectManager: 'Nguyễn Văn An',
    SiteSecretary: 'Trần Văn Duy',
    FinanceDirector: 'Huỳnh Quang Trung',
    Director: 'Ngô Thừa Xuân',
  },
  {
    DuAnId: 2,
    ProjectManager: 'Kha Văn Út',
    SiteSecretary: 'Trần Văn Duy',
    FinanceDirector: 'Huỳnh Quang Trung',
    Director: 'Ngô Thừa Xuân',
  },
  {
    DuAnId: 3,
    ProjectManager: 'Lê Hữu Dũng',
    SiteSecretary: 'Trần Văn Duy',
    FinanceDirector: 'Huỳnh Quang Trung',
    Director: 'Ngô Thừa Xuân',
  },
  {
    DuAnId: 4,
    ProjectManager: 'Tôn Hữu Chính',
    SiteSecretary: 'Trần Văn Duy',
    FinanceDirector: 'Huỳnh Quang Trung',
    Director: 'Ngô Thừa Xuân',
  },
];

export const DATA_PHONGBAN = [
  {
    Id: 1,
    Title: 'Vật tư',
    Manager: 'Trần Văn Duy',
    Emplyoeers: ['Vương Nghị','Thành Tam','Vũ Khải'],
  },
  {
    Id: 2,
    Title: 'Điện cơ',
    Manager: 'Lê Khải',
    Emplyoeers: ['Trung Sơn','Lê Hiếu','La Sương']
  },
  {
    Id: 3,
    Title: 'Thi công',
    Manager: 'Ngô Trí',
    Emplyoeers: ['Huỳnh Quang Trung','Văn Nghị','Tiến Dũng']
  },
  {
    Id: 4,
    Title: 'Giám sát',
    Manager: 'Bùi Cường',
    Emplyoeers: ['Hoàng việt','Trung Thành'],
  },
];
