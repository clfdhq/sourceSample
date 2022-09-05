import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Order, Pet } from '../../../../api/api.type';
import { getPetDetail } from '../../pet/services/pet.services';

type RefreshDataHandler = (itemEdit: Order) => void;
type saveItem = (item: Order) => void;

interface OrderDrawerProps {
  itemEdit?: Order;
  visibleEdit?: boolean;
  setVisibleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  refreshData: RefreshDataHandler;
  saveItem: saveItem;
  onDeleteOrder: Function;
}
interface FormOrder extends Order {
  shipDateMoment: moment.Moment;
}
const { Option } = Select;
export const OrderDrawer: React.FC<OrderDrawerProps> = (props) => {
  const { itemEdit, visibleEdit, setVisibleEdit, saveItem, onDeleteOrder } = props;
  const [form] = Form.useForm<FormOrder>();
  const [pet, setPet] = useState<Pet>();

  useEffect(() => {
    form.resetFields();
    if (itemEdit?.petId) {
      getPetInformation(itemEdit?.petId);
    }
    if (itemEdit?.id) {
      form.setFieldsValue({ ...itemEdit, shipDateMoment: moment(itemEdit?.shipDate) }); //
    }
  }, [itemEdit, form]);

  const onClose = () => {
    setVisibleEdit(false);
  };
  const editItemHandle = (formData: FormOrder) => {
    let save: Order = {
      ...formData,
      id: formData.id,
      petId: itemEdit?.petId,
      shipDate: moment(formData.shipDateMoment).toISOString(),
      complete: true,
    };
    saveItem(save);
    onClose();
  };
  const getPetInformation = async (petId: number) => {
    try {
      const { data } = await getPetDetail(petId);
      setPet(data);
    } catch (error) {
      console.error('Get Pet Error:', error);
    }
  };
  return (
    <>
      <Drawer
        // title={itemEdit?.id?  `Order ID: ${itemEdit.id}` : 'Create new order'}
        width={720}
        onClose={onClose}
        visible={visibleEdit}
        bodyStyle={{ paddingBottom: 80 }}
        getContainer={false}
      >
        <Form layout="vertical" hideRequiredMark form={form} onFinish={editItemHandle}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="id" label="Order ID:" rules={[{ required: true, message: 'ID ?' }]}>
                <Input placeholder="ID ?" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="quantity"
                label="Quantity:"
                rules={[{ required: false, message: 'Status?' }]}
              >
                <InputNumber min={1} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="shipDateMoment" label="Ship date:">
                <DatePicker style={{ width: '100%' }} format={'DD/MM/YYYY'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status:"
                rules={[{ required: false, message: 'status' }]}
              >
                <Select showArrow placeholder="Status ?">
                  <Option value="placed">placed</Option>
                  <Option value="approved">approved</Option>
                  <Option value="delivered">delivered</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Divider orientation="left" plain>Pet description</Divider>
            <Descriptions>
              <Descriptions.Item label="Name"> {pet?.name}</Descriptions.Item>
              <Descriptions.Item label="Category"> {pet?.category?.name}</Descriptions.Item>
              <Descriptions.Item label="Tags">
                {' '}
                {pet?.tags?.map((t) => ' ' + t.name).toString()}
              </Descriptions.Item>
            </Descriptions>
            <Divider></Divider>
          </Row>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button
                type="primary"
                onClick={() => onDeleteOrder(itemEdit)}
                danger
                hidden={itemEdit?.id ? false : true}
              >
                Delete
              </Button>
              <Button type="default" onClick={() => onClose()}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default OrderDrawer;
