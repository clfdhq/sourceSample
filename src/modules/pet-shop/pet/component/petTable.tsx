import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { Category, Order, Pet, Tag } from '../../../../api/api.type';

interface TablePetProps {
  dataSource?: Pet[];
  showEdit: (itemEdit: Pet) => void;
  deletePet: (itemEdit: Pet) => void;
  showOrder: (itemEdit: Order) => void;
  loadingTable: boolean;
}

const TablePet: React.FC<TablePetProps> = ({
  dataSource,
  deletePet,
  showEdit,
  showOrder,
  loadingTable,
}) => {
  const showEditHandle = (itemEdit: Pet) => {
    showEdit(itemEdit);
  };

  const columns: ColumnsType<Pet> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      //render: (number) => number ,
      sorter: (a, b) => a.id - b.id,
      width: '220px',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '200px',
      // render: (_) => _
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '120px',
      render: (category: Category) => category?.name, // ( value property,record ,index)
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: Tag[]) => tags?.map(t=>' '+t.name).toString(),
      width: '250px',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: '150px',
    },
    {
      title: 'Action',
      key: 'action',
      width: '250px',
      render: (_: Pet, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => showOrder({ petId: record.id })}>
            Order{' '}
          </Button>
          <Button onClick={() => showEditHandle(record)}>Edit </Button>
          <Button type="primary" danger onClick={() => deletePet(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      scroll={{ x: '100%', y: '50vh' }}
      style={{ marginTop: '20px' }}
      columns={columns}
      dataSource={dataSource}
      rowKey={'id'}
      loading={loadingTable}
    />
  );
};

export default TablePet;
