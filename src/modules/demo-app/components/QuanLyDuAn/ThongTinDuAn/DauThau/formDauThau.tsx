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
              label="Ng??y nh???n th??ng tin th???u:"
              name="NgayNhanThongTinThauMomment"
              rules={[{ required: false, message: 'ch???n ng??y' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="???? ph??c ????p tham gia:"
              name="PhucDap"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Select defaultValue={true} style={{ width: '100%' }}>
                <Option value={true}>C??</Option>
                <Option value={false}>Kh??ng</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng?????i th???c hi???n:"
              name="NguoiThucHien"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nh???p t??n!" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng??y th???c hi???n:"
              name="DiaChiLienHeChuDauTu"
              rules={[{ required: false, message: 'Ch???n ng??y' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng??y nh???n h??? s?? th???u:"
              name="NgayNhanHoSoThauMomment"
              rules={[{ required: false, message: 'ch???n ng??y' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="?????a ??i???m ph??t h??nh h??? s??:"
              name="DiaDiemPhatHoSo"
              rules={[{ required: false, message: 'Nh???p ?????a ??i???m!' }]}
            >
              <Input
                onChange={e=>changeInput(e)}
                style={{ width: '100%' }}
                prefix={<EnvironmentOutlined />}
                placeholder="Nh???p ?????a ??i???m!"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="B???o ?????m d??? th???u:"
              name="BaoDamDuThau"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Select defaultValue={true} style={{ width: '100%' }}>
                <Option value={true}>C??</Option>
                <Option value={false}>Kh??ng</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="?????ng ti???n:"
              name="LoaiTien"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Select defaultValue="VND" style={{ width: '100%' }}>
                <Option value="VND">VND</Option>
                <Option value="USD">USD</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Gi?? tr??? s?? b??? (VND):"
              name="GiaTriSoBo"
              rules={[{ required: true, message: 'Nh???p s??? ti???n!' }]}
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
              label="Ti???n ?????:"
              name="TienDo"
              rules={[{ required: false, message: 'Nh???p ti???n ?????!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<></>} placeholder="Nh???p ti???n ?????!" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="L??u ?? ?????c bi???t:"
              name="LuuYDacBiet"
              rules={[{ required: false, message: 'Nh???p s??? ??i???n tho???i!' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng??y, gi??? n???p th???u:"
              name="NgayGioNopThau"
              rules={[{ required: false, message: 'Nh???p email!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="C??ch th???c n???p th???u:"
              name="CachThucNopThau"
              rules={[{ required: false, message: 'C??ch th???c n???p th???u!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<></>} placeholder="C??ch th???c n???p th???u!" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng??n ng???:"
              name="NgonNgu"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Select defaultValue="Ti???ng Vi???t" style={{ width: '100%' }}>
                <Option value="Ti???ng Vi???t">Ti???ng Vi???t</Option>
                <Option value="Ti???ng Anh">Ti???ng Anh</Option>
                <Option value="Song ng???">Song ng???</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="N??i n???p th???u:"
              name="NoiNopThau"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Input.Group>
                <Select 
                 allowClear={true}
                 onChange={handleChange}
                 style={{ width: '30%' }} placeholder="Ch???n ?????a ??i???m">
                  <Option value="DiaDiemPhatHoSo">?????a ??i???m ph??t h??nh h??? s??</Option>
                </Select>
                <Input
                  onChange={e=> changeInput(e,'NoiNopThau')}
                  prefix={<EnvironmentOutlined />}
                  style={{ width: '70%' }}
                  placeholder="Nh???p ?????a ??i???m!"
                />
              </Input.Group>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng?????i th???c hi???n:"
              name="NguoiThucHien"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Input style={{ width: '100%' }} prefix={<UserOutlined />} placeholder="Nh???p t??n!" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ng??y, gi??? m??? th???u:"
              name="NgayGioMoThau"
              rules={[{ required: false, message: 'Ch???n ng??y' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              label="?????a ??i???m m??? th???u:"
              name="DiaDiemMoThau"
              rules={[{ required: false, message: 'Nh???p t??n!' }]}
            >
              <Input.Group>
                <Select 
                 allowClear={true}
                 style={{ width: '30%' }} placeholder="Ch???n ?????a ??i???m">
                  <Option value="DiaDiemPhatHoSo">?????a ??i???m ph??t h??nh h??? s??</Option>
                  <Option value="NoiNopThau">N??i n???p th???u</Option>
                </Select>
                <Input
                  prefix={<EnvironmentOutlined />}
                  style={{ width: '70%' }}
                  placeholder="Nh???p ?????a ??i???m!"
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
