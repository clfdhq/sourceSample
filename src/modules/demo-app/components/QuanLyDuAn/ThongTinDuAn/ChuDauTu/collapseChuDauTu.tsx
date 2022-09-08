import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Collapse, Descriptions} from 'antd';
import { DATA_CHUDAUTU } from '../../../../data-sample';
import {
  EditOutlined,
} from '@ant-design/icons';
import FormChuDauTuNhaThau from './formChuDauTu';

const { Panel } = Collapse;

const ChuDauTuNhaThau = () => {
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [item, setItem] = useState<any>(); // view show
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
    setItem(DATA_CHUDAUTU[0]);
  }, [idDetail]);
  return (
    <>
    <Collapse defaultActiveKey={['1']}>
      <Panel
        header="Chủ đầu tư và Quản lý dự án"
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
        
        {/* <Form
          name="basic"
          layout="vertical"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Chủ đầu tư:"
                name="ChuDauTu"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Người đại diện (Chủ đầu tư):"
                name="NguoiĐaiienChuDauTu"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Người liên hệ (Chủ đầu tư):"
                name="NguoiLienHeChuDauTu"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Địa chỉ liên hệ (Chủ đầu tư):"
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
                label="SĐT liên hệ (Chủ đầu tư):"
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
                label="Email liên hệ (Chủ đầu tư):"
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
            <Col span={24}>
              <Form.Item
                label="Nhà thầu:"
                name="NhaThauChinh"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Người đại diện (Nhà thầu):"
                name="NguoiĐaiienNhaThau"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Người liên hệ (Nhà thầu):"
                name="NguoiLienHeNhaThau"
                rules={[{ required: true, message: 'Nhập tên!' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  prefix={<UserOutlined />}
                  placeholder="Nhập tên!"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Địa chỉ liên hệ (Nhà thầu):"
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
                label="SĐT liên hệ (Nhà thầu):"
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
                label="Email liên hệ (Nhà thầu):"
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
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </Panel>
    </Collapse>

    <FormChuDauTuNhaThau visibleChuDauTuNhaThau = {visibleEdit} close = {close} item={item} />
    </>
  );
};
export default ChuDauTuNhaThau;
