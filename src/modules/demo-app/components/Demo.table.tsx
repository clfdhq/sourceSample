import { Button, Card, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { DataSample } from '../demo.interfaces';

interface DemoTableProps {
    dataSource?: DataSample[];
    showEdit: Function;
}
const DemoTable: React.FC<DemoTableProps> = (props: DemoTableProps) => {
    const { dataSource, showEdit } = props;


    const showEditHandle = (itemEdit: DataSample) => {
        showEdit(itemEdit);
    };

    const deleteDemo = (itemEdit: DataSample) => {
        console.log('deleteDemo', itemEdit);
    };

    const columns: ColumnsType<DataSample> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: string, record: DataSample) =>
                <>
                    <Button onClick={() => showEditHandle(record)}>Edit</Button>
                    <Button onClick={() => deleteDemo(record)}>Remove</Button>
                </>
        },
    ];


    return (
        <>
            <Table rowKey={'id'} dataSource={dataSource} columns={columns} />;
        </>
    );
};

export default DemoTable;
