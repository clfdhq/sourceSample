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
    item?: any;
    visibleThongTinCoBan: boolean;
    setVisibleThongTinCoBan: React.Dispatch<React.SetStateAction<boolean>>;
    refreshData?: RefreshDataHandler;
}
const ModelThongTinNhanSu = (props: DuAnProps) => {

  // const [unEdit, setUnEdit] = useState<boolean>(true);
  // const [typeProjectList, setTypeProjectList] = useState<TypeOptProject>();
  //const {isOpenComponent, openComponent,duAnDetail,getData } = props;
  const items = new dropdownDuAn();
  const typeProjectData = items.ProjectCategory.map((e)=>({value: e.Id, label: e.value}));
  const {item, visibleThongTinCoBan, setVisibleThongTinCoBan} = props;
  const [form] = Form.useForm();


  const handleOk = () => {
    setVisibleThongTinCoBan(false);
  };

  const handleCancel = () => {
    setVisibleThongTinCoBan(false);
  };
    useEffect(() => {
      form.setFieldsValue(item);
  }, [item]);

  return (
    <>
        <Modal title="Nhận sự dự án" visible={visibleThongTinCoBan} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical" hideRequiredMark form = {form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ProjectManager"
                label="Giám đốc dự án:"
                rules={[{ required: true, message: 'Nhập mã dự án' }]}>
                <Input placeholder="Nhập mã dự án"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="SiteSecretary"
                label="Thư ký dự án:"
                rules={[{ required: true, message: 'Nhập tên dự án' }]}>
                <Input placeholder="Nhập tên dự án" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="FinanceDirector"
                label="Giám đốc tài chính:"
                rules={[{ required: true, message: 'Nhập mã dự án' }]}>
                <Input placeholder="Nhập mã dự án"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Director"
                label="Tổng giám đốc:"
                rules={[{ required: true, message: 'Nhập tên dự án' }]}>
                <Input placeholder="Nhập tên dự án" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default ModelThongTinNhanSu;
