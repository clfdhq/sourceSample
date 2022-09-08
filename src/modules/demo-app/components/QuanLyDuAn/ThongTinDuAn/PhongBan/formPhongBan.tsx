import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Drawer,
  Col,
  Row,
  Modal,
} from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import { dropdownDuAn } from '../../../../data-sample';

interface PhongBanDuAnProps {
    item?: DuAn;
    visiblePhongBan: boolean;
    close: () => void;
    refreshData?: () => void;
}
const PhongBanDuAn:React.FC<PhongBanDuAnProps> = ({item, visiblePhongBan, close}) => {

  // const [unEdit, setUnEdit] = useState<boolean>(true);
  // const [typeProjectList, setTypeProjectList] = useState<TypeOptProject>();
  //const {isOpenComponent, openComponent,duAnDetail,getData } = props;
  const [form] = Form.useForm();


    useEffect(() => {
      form.setFieldsValue(item);
  }, [item]);

  return (
    <>
        <Drawer title="Phòng ban dự án" visible={visiblePhongBan} onClose={close}>
        View Phong Ban Edit
      </Drawer>
    </>
  );
};
export default PhongBanDuAn;
