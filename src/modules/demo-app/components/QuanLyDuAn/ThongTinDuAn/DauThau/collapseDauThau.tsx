import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Collapse, Descriptions} from 'antd';
import { DATA_CHUDAUTU } from '../../../../data-sample';
import {
  EditOutlined,
} from '@ant-design/icons';
import FormDauThau from './formDauThau';
import { DuAn } from '../../../../duan.interfaces';

const { Panel } = Collapse;

const ThongTinDauThau = () => {
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [item, setItem] = useState<DuAn>(); // view show
  //const [itemDetail, setItemDetail] = useState<DuAn>();

  const params = useParams();
  const idDetail = params.id;

  const showEdit = () => {
    setVisibleEdit(true);
    setItem(item);
  };
  const close = () => {
    setVisibleEdit(false);
  };

  // const getProjectCategory_Text = items.ProjectCategory.filter((i) =>
  // setItemDetail?.ProjectCategoryId.includes(i.Id)
  // ).map((i) => i.value);
  // interface TypeOptProject { value: number; label: string;}

  //const ProjectCategory = dropdownDuAn.ProjectCategory;

  // const openEdit = () => {
  //   setUnEdit(false);
  // };
  // const Ok = () => {
  //   setUnEdit(true);
  // };\

  //const { itemEdit, visibleEdit, setVisibleEdit} = props;

  //const [form] = Form.useForm<DuAn>();

  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    //setItem();
  }, [idDetail]);
  return (
    <>
    <Collapse defaultActiveKey={['1']}>
      <Panel
        header="Thông tin đấu thầu"
        key="1"
        extra={<EditOutlined onClick={event =>{event.stopPropagation(); showEdit()}} />}
      >
        <Descriptions title="Chủ đầu tư">
        <Descriptions.Item label = "Chủ đầu tư" >
          {item?.ChuDauTu}
        </Descriptions.Item>
        <Descriptions.Item label = "Người đại diện" >
          {item?.NguoiDaiDienChuDauTu}
        </Descriptions.Item>
        <Descriptions.Item label = "Người liên hệ" >
          {item?.NguoiLienHeChuDauTu}
        </Descriptions.Item>
        <Descriptions.Item label = "Địa chỉ liên hệ" >
          {item?.DiaChiLienHeChuDauTu}
        </Descriptions.Item>
        <Descriptions.Item label = "SĐT liên hệ" >
          {item?.SoDienThoaiChuDauTu}
        </Descriptions.Item>
        <Descriptions.Item label = "Email liên hệ" >
          {item?.EmailChuDauTu}
        </Descriptions.Item>
        </Descriptions>
        <Descriptions title="Nhà thầu">
        <Descriptions.Item label = "Nhà thầu chính" >
          {item?.NhaThauChinh}
        </Descriptions.Item>
        <Descriptions.Item label = "Người đại diện" >
          {item?.NguoiDaiDienNhaThau}
        </Descriptions.Item>
        <Descriptions.Item label = "Người liên hệ" >
          {item?.NguoiLienHeNhaThau}
        </Descriptions.Item>
        <Descriptions.Item label = "Địa chỉ liên hệ" >
          {item?.DiaChiLienHeNhaThau}
        </Descriptions.Item>
        <Descriptions.Item label = "SĐT liên hệ" >
          {item?.SoDienThoaiNhaThau}
        </Descriptions.Item>
        <Descriptions.Item label = "Email liên hệ" >
          {item?.EmailNhaThau}
        </Descriptions.Item>
        </Descriptions>
        
      
      </Panel>
    </Collapse>

    <FormDauThau visibleDauThau = {visibleEdit} close = {close} item={item} />
    </>
  );
};
export default ThongTinDauThau;
