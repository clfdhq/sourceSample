import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Select, Space, Drawer, Col, Row, Modal, Button } from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import { dropdownDuAn } from '../../../../data-sample';

interface ThongTinNhanSuProps {
  item?: DuAn;
  visibleNhanSu: boolean;
  close: () => void;
  refreshData?: (itemEdit: DuAn) => void;
}
const DrawerThongTinNhanSu: React.FC<ThongTinNhanSuProps> = ({ item, visibleNhanSu, close }) => {
  // const [unEdit, setUnEdit] = useState<boolean>(true);
  // const [typeProjectList, setTypeProjectList] = useState<TypeOptProject>();
  //const {isOpenComponent, openComponent,duAnDetail,getData } = props;
  //const items = new dropdownDuAn();
  //const typeProjectData = items.ProjectCategory.map((e)=>({value: e.Id, label: e.value}));
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(item);
  }, [item]);

  return (
    <Drawer
      width={720}
      title="Nhân sự dự án"
      onClose={close}
      visible={visibleNhanSu}
      getContainer={false}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="ProjectManager"
              label="Giám đốc dự án:"
              rules={[{ required: true, message: 'Nhập mã dự án' }]}
            >
              <Input placeholder="Nhập mã dự án" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="SiteSecretary"
              label="Thư ký dự án:"
              rules={[{ required: true, message: 'Nhập tên dự án' }]}
            >
              <Input placeholder="Nhập tên dự án" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="FinanceDirector"
              label="Giám đốc tài chính:"
              rules={[{ required: true, message: 'Nhập mã dự án' }]}
            >
              <Input placeholder="Nhập mã dự án" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Director"
              label="Tổng giám đốc:"
              rules={[{ required: true, message: 'Nhập tên dự án' }]}
            >
              <Input placeholder="Nhập tên dự án" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={close}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
export default DrawerThongTinNhanSu;
