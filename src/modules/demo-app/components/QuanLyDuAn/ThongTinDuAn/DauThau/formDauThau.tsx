import { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Col, DatePicker, Divider, Drawer, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneFilled,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

const {Option} = Select;

interface FormDauThauProps {
  item?: DuAn
  visibleDauThau: boolean;
  close: () => void;
}

const FormDauThau: React.FC<FormDauThauProps> = ({
  item,
  visibleDauThau,
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
  const dateValues = {
    NgayNhanThongTinThauMomment : moment(item?.NgayNhanThongTinThau),
    NgayThucHienMomment : moment(item?.NgayThucHien),
    NgayNhanHoSoThauMomment : moment(item?.NgayNhanHoSoThau),
    NgayGioNopThauMomment : moment(item?.NgayGioNopThau),
    NgayGioMoThauMomment : moment(item?.NgayGioMoThau),
  }
  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    form.setFieldsValue(item)
  }, [item,form]);
  return (
    <Drawer
      width={800}
      title=""
      onClose={onClose}
      visible={visibleDauThau}
      getContainer={false}
    >
      <Form
      form = {form}
      initialValues = {dateValues}
        layout="vertical"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        //initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Ngày nhận thông tin thầu:"
              name="NgayNhanThongTinThauMomment"
              rules={[{ required: false, message: 'chọn ngày' }]}
            >
              <DatePicker style={{ width: "100%" }}/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Đã phúc đáp tham gia:"
              name="PhucDap"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Select defaultValue={true} style={{ width: "100%" }}>
                  <Option value={true}>Có</Option>
                  <Option value={false}>Không</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Người thực hiện:"
              name="NguoiThucHien"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nhập tên!" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngày thực hiện:"
              name="DiaChiLienHeChuDauTu"
              rules={[{ required: false, message: 'Chọn ngày' }]}
            >
              <DatePicker style={{ width: "100%" }}/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngày nhận hồ sơ thầu:"
              name="NgayNhanHoSoThauMomment"
              rules={[{ required: false, message: 'chọn ngày' }]}
            >
             <DatePicker style={{ width: "100%" }}/>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="Địa điểm phát hành hồ sơ:"
              name="DiaDiemPhatHoSo"
              rules={[{ required: false, message: 'Nhập địa điểm!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<MailOutlined />}
                placeholder="Nhập địa điểm!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Bảo đảm dự thầu:"
              name="BaoDamDuThau"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
               <Select defaultValue={true} style={{ width: "100%" }}>
                  <Option value={true}>Có</Option>
                  <Option value={false}>Không</Option>
              </Select>|
              </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Đồng tiền:"
              name="LoaiTien"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Select defaultValue="VND" style={{ width: "100%" }}>
                  <Option value="VND">VND</Option>
                  <Option value="USD">USD</Option>
              </Select>|
              </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Giá trị sơ bộ (VND):"
              name="GiaTriSoBo"
              rules={[{ required: true, message: 'Nhập số tiền!' }]}
            >
               <InputNumber style={{ width: "100%" }}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value!.replace(/\$\s?|(,*)/g, '')}
    />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tiến độ:"
              name="TienDo"
              rules={[{ required: false, message: 'Nhập tiến độ!' }]}
            >
              <Input
                style={{ width: '100%' }}
                prefix={<></>}
                placeholder="Nhập tiến độ!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Lưu ý đặc biệt:"
              name="LuuYDacBiet"
              rules={[{ required: false, message: 'Nhập số điện thoại!' }]}
            >
             <TextArea rows={4} />
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
export default FormDauThau;
