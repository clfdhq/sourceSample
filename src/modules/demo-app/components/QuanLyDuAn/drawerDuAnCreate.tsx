import 'antd/dist/antd.css';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Drawer,
  Col,
  Row,
  message,
} from 'antd';
import { dropdownDuAn} from '../../data-sample'
import { DuAn } from '../../duan.interfaces';

type RefreshDataHandler = (itemEdit: DuAn) => void;
interface DuAnDrawerCreateProps {
    itemEdit?: DuAn;
    visibleCreate: boolean;
    setVisibleCreate: React.Dispatch<React.SetStateAction<boolean>>;
    refreshData: RefreshDataHandler;
}

const items = new dropdownDuAn();
const typeProjectData = items.ProjectCategory.map((e)=>({value: e.Id, label: e.value}))
const DrawerDuAnCreate = (props: DuAnDrawerCreateProps) => {
const items = new dropdownDuAn();
  const {visibleCreate, setVisibleCreate,refreshData} = props;
  const [form] = Form.useForm();
    const onClose = () => {
      setVisibleCreate(false);
      form.resetFields();
    };
    const editItemHandle = (formData: DuAn) => {
      refreshData({ ...formData});
      message.success('thêm thành công');

    };
  return (
    <>
      <Drawer
        title="Thông tin dự án cơ bản"
        width={720}
        onClose={onClose}
        visible = {visibleCreate}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark form = {form} onFinish={editItemHandle}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ProjectCode"
                label="Mã dự án:"
                rules={[{ required: true, message: 'Nhập mã dự án' }]}>
                <Input placeholder="Nhập mã dự án"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Title"
                label="Tên dự án:"
                rules={[{ required: true, message: 'Nhập tên dự án' }]}>
                <Input placeholder="Nhập tên dự án" />
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="ProjectCategoryId"
                label="Phân loại dự án"
                rules={[{ required: true, message: 'Chọn loại dự án' }]}>
                <Select  mode="multiple" showArrow placeholder="Chọn loại dự án" options={typeProjectData} > 
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ProjectSize"
                label="Quy mô dự án:"
                rules={[{ required: false, message: 'Nhập quy mô' }]}>
                <Input placeholder='Nhập quy mô' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Region"
                label="Khu vực: "
                rules={[{ required: true, message: 'chọn khu vực' }]}>
                <Select showArrow placeholder="Chọn khu vực" 
                options={items.VungMien} > 
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Location"
                label="Địa điểm triển khai dự án:"
                rules={[{ required: false, message: 'Nhập địa điểm' }]}>
                <Input placeholder='Nhập địa điểm' />
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Year"
                label="Năm thực hiện "
                rules={[{ required: true, message: 'Nhập năm' }]}>
               <InputNumber min={1990} max={2100} style={{ width: '100%' }}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="ProjectStatus"
                label="Trạng thái:"
                rules={[{ required: true, message: 'Chọn trạng thái' }]}>
                <Select showArrow placeholder="Chọn trạng thái" 
                options={items.TinhTrang} > 
                </Select>
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
                    required: false,
                    message: 'Nhập mô tả',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Nhập mô tả" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button type="default" onClick= {()=> onClose()} >
              Cancel
            </Button>
            </Space>

          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default DrawerDuAnCreate;
