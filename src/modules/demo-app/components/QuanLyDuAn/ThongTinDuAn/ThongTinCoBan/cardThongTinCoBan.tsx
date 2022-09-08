import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, Card, Descriptions } from 'antd';
import { dropdownDuAn } from '../../../../data-sample';
import { DuAn } from '../../../../duan.interfaces';
import { getDuAnDetail } from '../../../../services/demo.services';
import ModelThongTinCoBan from './formThongTinCoBan';
import { EditOutlined } from '@ant-design/icons';

const ThongTinCoBan = () => {
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<DuAn>();
  const [DuAnDetail, setDuAnDetail] = useState<DuAn>();

  const params = useParams();
  const idDetail = params.id;
  const items = new dropdownDuAn();

  const showEdit = () => {
    setVisibleEdit(true);
    //setItemEdit(item);
  };
  const close= () => {
    setVisibleEdit(false)
  }
  const getProjectCategory_Text = items.ProjectCategory.filter((i) =>
    DuAnDetail?.ProjectCategoryId.includes(i.Id)
  ).map((i) => i.value);
  // interface TypeOptProject { value: number; label: string;}

  //const ProjectCategory = dropdownDuAn.ProjectCategory;

  // const openEdit = () => {
  //   setUnEdit(false);
  // };
  // const Ok = () => {
  //   setUnEdit(true);
  // };\

  //const { itemEdit, visibleEdit, setVisibleEdit} = props;

  const getDetail = () => {
    if (!idDetail) return null;
    setDuAnDetail(getDuAnDetail(parseInt(idDetail, 10)));
  };

  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    getDetail();
  }, [idDetail]);
  return (
    <>
      <Card
        title="Thông tin cơ bản"
        extra={<EditOutlined onClick={showEdit}> </EditOutlined>}
        style={{ width: '100%' }}
      >
        <Descriptions>
          <Descriptions.Item label="Mã dự án">{DuAnDetail?.ProjectCode}</Descriptions.Item>
          <Descriptions.Item label="Tên dự án">{DuAnDetail?.Title}</Descriptions.Item>
          <Descriptions.Item label="Loại dự án">
            {getProjectCategory_Text.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="Năm thực hiện">{DuAnDetail?.Year}</Descriptions.Item>
          <Descriptions.Item label="Trạng thái">{DuAnDetail?.ProjectStatus}</Descriptions.Item>
        </Descriptions>
      </Card>

      <ModelThongTinCoBan
        item={DuAnDetail}
        visibleThongTinCoBan={visibleEdit}
        close={close}
      ></ModelThongTinCoBan>
    </>
  );
};
export default ThongTinCoBan;
