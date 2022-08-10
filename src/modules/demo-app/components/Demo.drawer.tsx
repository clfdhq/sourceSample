import { type } from '@testing-library/user-event/dist/type';
import { Button, Card, Drawer, Form, Input, message, Space } from 'antd';
import { useEffect, useState } from 'react';
import { DataSample } from '../demo.interfaces';

type RefreshDataHandler = (itemEdit: DataSample) => void;

interface DemoDrawerProps {
    itemEdit?: DataSample;
    visibleEdit: boolean;
    setVisibleEdit: React.Dispatch<React.SetStateAction<boolean>>;
    refreshData: RefreshDataHandler;
}

const DemoDrawer: React.FC<DemoDrawerProps> = (props: DemoDrawerProps) => {

    const { itemEdit, visibleEdit, setVisibleEdit, refreshData } = props;
    const [formEditDemo] = Form.useForm();

    const onClose = () => {
        setVisibleEdit(false);
    };

    const editItemHandle = (formData: DataSample) => {
        if (!itemEdit?.id) throw new Error('item edit not found');
        refreshData({ ...formData, id: itemEdit?.id });
        message.success('Lưu thành công');
    };

    useEffect(() => {
        formEditDemo.setFieldsValue(itemEdit);
    }, [itemEdit]);

    return (
        <>
            <Drawer
                title="Edit Demo"
                closable={false}
                placement="right"
                width={500}
                onClose={onClose}
                visible={visibleEdit}
            >
                <Form
                    form={formEditDemo}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={editItemHandle}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </Drawer>
        </>
    );
};

export default DemoDrawer;
