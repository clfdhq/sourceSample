import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Select, Space, Drawer, Col, Row, Modal, Button } from 'antd';
import { DuAn } from '../../../../duan.interfaces';
import { dropdownDuAn } from '../../../../data-sample';

type RefreshDataHandler = (itemEdit: DuAn) => void;

interface DuAnProps {
  item?: DuAn;
  visibleThongTinCoBan: boolean;
  close: () => void;
  refreshData?: RefreshDataHandler;
}
const ModelThongTinCoBan = (props: DuAnProps) => {
  // const [unEdit, setUnEdit] = useState<boolean>(true);
  // const [typeProjectList, setTypeProjectList] = useState<TypeOptProject>();
  //const {isOpenComponent, openComponent,duAnDetail,getData } = props;
  const items = new dropdownDuAn();
  const typeProjectData = items.ProjectCategory.map((e) => ({ value: e.Id, label: e.value }));
  const { item, visibleThongTinCoBan, close } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(item);
  }, [item]);

  return (
    <>
      <Drawer
        width={720}
        title="Thông tin cơ bản"
        onClose={close}
        visible={visibleThongTinCoBan}
        getContainer={false}
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ProjectCode"
                label="Mã dự án:"
                rules={[{ required: true, message: 'Nhập mã dự án' }]}
              >
                <Input placeholder="Nhập mã dự án" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Title"
                label="Tên dự án:"
                rules={[{ required: true, message: 'Nhập tên dự án' }]}
              >
                <Input placeholder="Nhập tên dự án" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ProjectCategoryId"
                label="Phân loại dự án"
                rules={[{ required: true, message: 'Chọn loại dự án' }]}
              >
                <Select
                  mode="multiple"
                  showArrow
                  placeholder="Chọn loại dự án"
                  options={typeProjectData}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ProjectSize"
                label="Quy mô dự án:"
                rules={[{ required: true, message: 'Nhập quy mô' }]}
              >
                <Input placeholder="Nhập quy mô" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Region"
                label="Khu vực: "
                rules={[{ required: true, message: 'chọn khu vực' }]}
              >
                <Select showArrow placeholder="Chọn khu vực" options={items.VungMien}></Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Location"
                label="Địa điểm triển khai dự án:"
                rules={[{ required: true, message: 'Nhập địa điểm' }]}
              >
                <Input placeholder="Nhập địa điểm" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Year"
                label="Năm thực hiện "
                rules={[{ required: true, message: 'Nhập năm' }]}
              >
                <InputNumber min={1990} max={2100} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ProjectStatus"
                label="Trạng thái:"
                rules={[{ required: true, message: 'Chọn trạng thái' }]}
              >
                <Select showArrow placeholder="Chọn trạng thái" options={items.TinhTrang}></Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô tả thông tin dự án (Gói thầu):"
                rules={[
                  {
                    required: true,
                    message: 'Nhập mô tả',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Nhập mô tả" />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                  <Button onClick={close}>Cancel</Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default ModelThongTinCoBan;
