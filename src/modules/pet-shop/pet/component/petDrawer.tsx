import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useEffect } from 'react' 
import { Pet } from '../../../../api/api.type';
import { PetCategory, PetTag } from '../../pet/services/pet.services';

interface PetDrawerProps {
  itemEdit?: Pet;
  visibleEdit?: boolean;
  refreshData: () => void;
  saveItem: (itemEdit: Pet) => void;
  closePet: () => void;
}
interface FormDrawerPet extends Pet {
  categoryId?: number;
  tagIds?: number[];
}
const { Option } = Select;

const PetDrawer: React.FC<PetDrawerProps> = ({ itemEdit, visibleEdit, saveItem, closePet }) => {
  const [form] = Form.useForm<Pet>();

  const Category = [...PetCategory, itemEdit?.category || {}].filter(
    (value, index, array) => index === array.findIndex((item) => item.id === value.id)
  );

  const Tags = [...PetTag, ...(itemEdit?.tags || [])].filter(
    (value, index, array) => index === array.findIndex((item) => item.id === value.id)
  );

  const initialValues = {
    ...itemEdit,
    categoryId: itemEdit?.category?.id,
    tagIds: itemEdit?.tags?.map((tag) => tag.id),
  };

  useEffect(() => {
    form.resetFields();
    if (itemEdit && visibleEdit) {
      form.setFieldsValue(itemEdit);
    }
  }, [itemEdit, form, visibleEdit]);

  const close = () => {
    closePet();
    form.resetFields();
  };

  const editItemHandle = (formData: FormDrawerPet) => {
    const category = Category.find((i) => i.id === formData?.categoryId);
    const tags = Tags.filter((t) => formData.tagIds?.includes(t.id || 0));
    const item = {
      ...formData,
      category,
      tags,
    };
    saveItem(item);
    close();
  };

  return (
    <>
      <Drawer
        title={itemEdit?.id ? `Pet ID: ${itemEdit?.id}` : 'Create new Pet'}
        width={720}
        onClose={close}
        visible={visibleEdit}
        bodyStyle={{ paddingBottom: 80 }}
        getContainer={false} // gỡ lỗi Forget to pass `form` prop?
      >
        <Form layout="vertical" form={form} onFinish={editItemHandle} initialValues={initialValues}>
          <Row gutter={16}>
            <Col span={12} hidden={itemEdit?.id ? true : false}>
              <Form.Item name="id" label="Pet ID:" rules={[{ required: true, message: 'ID ?' }]}>
                <Input placeholder="ID ?" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="name" label="Name:" rules={[{ required: true, message: 'name ?' }]}>
                <Input placeholder="name ?" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="categoryId"
                label="Category:"
                rules={[{ required: false, message: 'Category ?' }]}
              >
                <Select showArrow placeholder="Category ?">
                  {/* [
                    itemEdit?.category,
                    ...PetCategory.filter((f) => f.id !== itemEdit?.category?.id),
                  ] */}
                  {Category.map((c, i) => (
                    <Option value={c.id} key={i}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tagIds" label="Tag:" rules={[{ required: false, message: 'Tag ?' }]}>
                <Select mode="multiple" showArrow placeholder="Tag ?">
                  {Tags.map((t, i) => (
                    <Option value={t.id} key={i}>
                      {t.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status:"
                rules={[{ required: false, message: 'Status?' }]}
              >
                <Select showArrow placeholder="Status ?">
                  <Option value="available">available</Option>
                  <Option value="pending">pending</Option>
                  <Option value="sold">sold</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button type="default" onClick={close}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default PetDrawer;
