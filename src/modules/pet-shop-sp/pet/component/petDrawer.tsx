import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useEffect } from 'react';
import { Pet } from '../../../../api/api.type';

type RefreshDataHandler = (itemEdit: Pet) => void;

interface PetDrawerProps {
  itemEdit?: Pet;
  visibleEdit?: boolean;
  setVisibleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  refreshData: RefreshDataHandler;
  saveItem: Function;
  // setPetRef:Function;
  // petRef: {
  //   PetCategory: Category[],
  //   PetTag: Tag[],
  // }
}
const { Option } = Select;
export const PetDrawer: React.FC<PetDrawerProps> = (props: PetDrawerProps) => {
  const { itemEdit, visibleEdit, setVisibleEdit, saveItem } = props;
  const [form] = Form.useForm<Pet>();


  //const Category = [...PetCategory,itemEdit?.category || {}].filter((value, index, array) => index === array.findIndex((item) => item.id === value.id));
  //const Tags = [...PetTag,...itemEdit?.tags || []].filter((value, index, array) => index === array.findIndex((item) => item.id === value.id));
  const initialValues = {
    ...itemEdit,
    categoryId: itemEdit?.category?.id,
    tagsId: itemEdit?.tags?.map((tag) => tag.id),
  };

  useEffect(() => {
    form.resetFields();
    if (itemEdit && visibleEdit) {

      // console.log('Category', Category);
      // console.log('Tags', Tags);

      form.setFieldsValue(itemEdit);
    }
  }, [itemEdit, form, visibleEdit]);
  const onClose = () => {
    setVisibleEdit(false);
    form.resetFields(undefined);
  };
  // const editItemHandle = (formData: any) => {
  //   let category = Category.find((i) => i.id === formData?.['categoryId']);
  //   let tags = Tags?.filter((i) => formData?.['tagsId']?.includes(i.id));
  //   let save = {
  //     ...formData,
  //     category: category,
  //     tags: tags,
  //   };
  //   // console.log('formData', formData);
  //   // console.log('Save Item', save);
  //   saveItem(save);
  //   onClose();
  // };
  return (
    <>
      {/* <Drawer
        title={itemEdit?.id ? `Pet ID: ${itemEdit?.id}` : 'Create new Pet'}
        width={720}
        onClose={onClose}
        visible={visibleEdit}
        bodyStyle={{ paddingBottom: 80 }}
        getContainer={false} // gỡ lỗi Forget to pass `form` prop?
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={editItemHandle}
          initialValues={initialValues}
        >
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
                  {Category.map((m,i) => (
                    <Option value={m?.id} key={i}>{m?.title}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tagsId" label="Tag:" rules={[{ required: false, message: 'Tag ?' }]}>
                <Select mode="multiple" showArrow placeholder="Tag ?">
                  {Tags.map((t,i) => (
                    <Option value={t?.id} key={i}>
                      {t?.title}
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
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button type="default" onClick={() => onClose()}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer> */}
    </>
  );
};

export default PetDrawer;
