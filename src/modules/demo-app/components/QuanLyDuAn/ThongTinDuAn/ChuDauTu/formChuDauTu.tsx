import { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Col, Divider, Drawer, Form, Input, Row, Space } from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneFilled,
  UserOutlined,
} from '@ant-design/icons';

interface FormChuDauTuNhaThauProps {
  item?: DuAn
  visibleChuDauTuNhaThau: boolean;
  close: () => void;
}

const FormChuDauTuNhaThau: React.FC<FormChuDauTuNhaThauProps> = ({
  item,
  visibleChuDauTuNhaThau,
  close,
}) => {
  //const [itemEdit, setItemEdit] = useState<DuAn>();
  //const [DuAnDetail, setDuAnDetail] = useState<DuAn>();

  //const params = useParams();
  //const idDetail = params.id;
  const [form] = Form.useForm();

  const onFinish = () => {};
  const onFinishFailed = () => {};

  const onClose = () => {
    close();
  };

  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    form.setFieldsValue(item)
  }, [item,form]);
  return (
    <Drawer
      width={720}
      title=""
      onClose={onClose}
      visible={visibleChuDauTuNhaThau}
      getContainer={false}
    >
      <Form
      form = {form}
        layout="vertical"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        //initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Divider>Chủ đầu tư</Divider>
          <Col span={24}>
            <Form.Item
              label="Chủ đầu tư:"
              name="ChuDauTu"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Người đại diện:"
              name="NguoiDaiDienChuDauTu"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Người liên hệ:"
              name="NguoiLienHeChuDauTu"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Địa chỉ liên hệ:"
              name="DiaChiLienHeChuDauTu"
              rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<EnvironmentOutlined />}
                placeholder="Nhập địa chỉ!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="SĐT liên hệ:"
              name="SoDienThoaiChuDauTu"
              rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<PhoneFilled />}
                placeholder="Nhập số điện thoại!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Email liên hệ:"
              name="EmailChuDauTu"
              rules={[{ required: true, message: 'Nhập email!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<MailOutlined />}
                placeholder="Nhập email!"
              />
            </Form.Item>
          </Col>
          <Divider>Nhà thầu</Divider>
          <Col span={24}>
            <Form.Item
              label="Nhà thầu chính:"
              name="NhaThauChinh"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Người đại diện:"
              name="NguoiDaiDienNhaThau"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Người liên hệ (Nhà thầu):"
              name="NguoiLienHeNhaThau"
              rules={[{ required: true, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Địa chỉ liên hệ:"
              name="DiaChiLienHeNhaThau"
              rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<EnvironmentOutlined />}
                placeholder="Nhập địa chỉ!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="SĐT liên hệ:"
              name="SoDienThoaiNhaThau"
              rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<PhoneFilled />}
                placeholder="Nhập số điện thoại!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Email liên hệ:"
              name="EmailNhaThau"
              rules={[{ required: true, message: 'Nhập email!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<MailOutlined />}
                placeholder="Nhập email!"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button onClick={close}>
          Cancel
        </Button>
        </Space>
      </Form.Item>
      </Form>
    </Drawer>
  );
};
export default FormChuDauTuNhaThau;
