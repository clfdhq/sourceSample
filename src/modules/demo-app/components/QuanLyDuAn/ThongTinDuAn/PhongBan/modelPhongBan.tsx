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


type RefreshDataHandler = (itemEdit: DuAn) => void;

interface DuAnProps {
    item?: DuAn;
    visiblePhongBan: boolean;
    setVisiblePhongBan: React.Dispatch<React.SetStateAction<boolean>>;
    refreshData?: RefreshDataHandler;
}
const ModelPhongBanDuAn = (props: DuAnProps) => {

  // const [unEdit, setUnEdit] = useState<boolean>(true);
  // const [typeProjectList, setTypeProjectList] = useState<TypeOptProject>();
  //const {isOpenComponent, openComponent,duAnDetail,getData } = props;
  const items = new dropdownDuAn();
  const typeProjectData = items.ProjectCategory.map((e)=>({value: e.Id, label: e.value}));
  const {item, visiblePhongBan, setVisiblePhongBan} = props;
  const [form] = Form.useForm();

  const handleOk = () => {
    setVisiblePhongBan(false);
  };

  const handleCancel = () => {
    setVisiblePhongBan(false);
  };
    useEffect(() => {
      form.setFieldsValue(item);
  }, [item]);

  return (
    <>
        <Modal title="Phòng ban dự án" visible={visiblePhongBan} onOk={handleOk} onCancel={handleCancel}>
        View Phong Ban Edit
      </Modal>
    </>
  );
};
export default ModelPhongBanDuAn;
