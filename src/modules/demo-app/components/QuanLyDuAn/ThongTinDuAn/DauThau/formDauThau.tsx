import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {
  AutoComplete,
  Button,
  Col,
  DatePicker,
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import {
  DollarCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  PhoneFilled,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

interface FormDauThauProps {
  item?: DuAn;
  visibleDauThau: boolean;
  close: () => void;
}
interface GoiYDiaDiem {
  DiaDiemPhatHoSo?: string;
  NoiNopThau?: string;
}
const FormDauThau: React.FC<FormDauThauProps> = ({ item, visibleDauThau, close }) => {
  //const [itemEdit, setItemEdit] = useState<DuAn>();
  //const [DuAnDetail, setDuAnDetail] = useState<DuAn>();
  const [goiYDiaDiem, setGoiYDiaDiem] = useState<GoiYDiaDiem>();

  //const params = useParams();
  //const idDetail = params.id;

  const changeInput = (e: any, key?:string) => {
    // console.log('changeInput',e)
    setGoiYDiaDiem({ ...goiYDiaDiem, ...{ [e.target.id || key ]: e.target.value } });
  };

  const handleChange = (e: string ,option: any ) => {
    console.log('value: ',e)
    console.log('option: ',option)
    form.setFieldsValue({NoiNopThau:e})
  }

  const getTest = () => {
    console.log('GoiYDiaDiem', goiYDiaDiem);
  };

  const [form] = Form.useForm();

  const onFinish = () => {};
  const onFinishFailed = () => {};

  const onClose = () => {
    close();
  };
  const dateValues = {
    NgayNhanThongTinThauMomment: moment(item?.NgayNhanThongTinThau),
    NgayThucHienMomment: moment(item?.NgayThucHien),
    NgayNhanHoSoThauMomment: moment(item?.NgayNhanHoSoThau),
    NgayGioNopThauMomment: moment(item?.NgayGioNopThau),
    NgayGioMoThauMomment: moment(item?.NgayGioMoThau),
  };
  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    console.log('Form:', form.getFieldsValue());
  }, [form]);
  return (
    <Drawer
      width="800px"
      height=""
      title=""
      onClose={onClose}
      visible={visibleDauThau}
      getContainer={false}
    >
      <Form
        form={form}
        initialValues={dateValues}
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
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Đã phúc đáp tham gia:"
              name="PhucDap"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Select defaultValue={true} style={{ width: '100%' }}>
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
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngày nhận hồ sơ thầu:"
              name="NgayNhanHoSoThauMomment"
              rules={[{ required: false, message: 'chọn ngày' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="Địa điểm phát hành hồ sơ:"
              name="DiaDiemPhatHoSo"
              rules={[{ required: false, message: 'Nhập địa điểm!' }]}
            >
              <Input
                onChange={e=>changeInput(e)}
                style={{ width: '100%' }}
                prefix={<EnvironmentOutlined />}
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
              <Select defaultValue={true} style={{ width: '100%' }}>
                <Option value={true}>Có</Option>
                <Option value={false}>Không</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Đồng tiền:"
              name="LoaiTien"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Select defaultValue="VND" style={{ width: '100%' }}>
                <Option value="VND">VND</Option>
                <Option value="USD">USD</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Giá trị sơ bộ (VND):"
              name="GiaTriSoBo"
              rules={[{ required: true, message: 'Nhập số tiền!' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                prefix={<DollarCircleOutlined />}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Tiến độ:"
              name="TienDo"
              rules={[{ required: false, message: 'Nhập tiến độ!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<></>} placeholder="Nhập tiến độ!" />
            </Form.Item>
          </Col>
          <Col span={24}>
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
              label="Ngày, giờ nộp thầu:"
              name="NgayGioNopThau"
              rules={[{ required: false, message: 'Nhập email!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Cách thức nộp thầu:"
              name="CachThucNopThau"
              rules={[{ required: false, message: 'Cách thức nộp thầu!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<></>} placeholder="Cách thức nộp thầu!" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngôn ngữ:"
              name="NgonNgu"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Select defaultValue="Tiếng Việt" style={{ width: '100%' }}>
                <Option value="Tiếng Việt">Tiếng Việt</Option>
                <Option value="Tiếng Anh">Tiếng Anh</Option>
                <Option value="Song ngữ">Song ngữ</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="Nơi nộp thầu:"
              name="NoiNopThau"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Input.Group>
                <Select 
                 allowClear={true}
                 onChange={handleChange}
                 style={{ width: '30%' }} placeholder="Chọn địa điểm">
                  <Option value="DiaDiemPhatHoSo">Địa điểm phát hành hồ sơ</Option>
                </Select>
                <Input
                  onChange={e=> changeInput(e,'NoiNopThau')}
                  prefix={<EnvironmentOutlined />}
                  style={{ width: '70%' }}
                  placeholder="Nhập địa điểm!"
                />
              </Input.Group>
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
              label="Ngày, giờ mỏ thầu:"
              name="NgayGioMoThau"
              rules={[{ required: false, message: 'Chọn ngày' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="Địa điểm mở thầu:"
              name="DiaDiemMoThau"
              rules={[{ required: false, message: 'Nhập tên!' }]}
            >
              <Input.Group>
                <Select 
                 allowClear={true}
                 style={{ width: '30%' }} placeholder="Chọn địa điểm">
                  <Option value="DiaDiemPhatHoSo">Địa điểm phát hành hồ sơ</Option>
                  <Option value="NoiNopThau">Nơi nộp thầu</Option>
                </Select>
                <Input
                  prefix={<EnvironmentOutlined />}
                  style={{ width: '70%' }}
                  placeholder="Nhập địa điểm!"
                />
              </Input.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button type="primary" onClick={getTest}>
              gettesst
            </Button>
            <Button onClick={close}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  )
};
export default FormDauThau;
