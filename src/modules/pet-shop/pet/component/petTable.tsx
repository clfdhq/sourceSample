import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { Category, Order, Pet, Tag } from '../../../../api/api.type';

type showEdit = (itemEdit: Pet) => void;
type deletePet = (itemEdit: Pet) => void;
type showOrder = (itemEdit: Order) => void;

export interface TablePetPros {
  dataSource?: Pet[];
  showEdit: showEdit;
  deletePet: deletePet;
  showOrder: showOrder;
  loadingTable:boolean
}

const TablePet: React.FC<TablePetPros> = (props) => {
  const { dataSource, deletePet, showEdit, showOrder,loadingTable } = props;
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
      width: '230px'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '200px'
      // render: (_) => _
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '120px',
      render: (category: Category) =>  category?.name, // ( value property,record ,index)
    },
    {
      title: 'CategoryJSON',
      dataIndex: 'category',
      key: 'category',
      render: (_:Category) =>  JSON.stringify(_)// (value,record ,index)
    },
    {
      title: 'Tags',
      key: 'Tag',
      dataIndex: 'Tag',
      render: (tags: Tag[]) => tags?.map(t=>t.name).toString(),
      width: '250px'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: '150px'
    },
    {
      title: 'Action',
      key: 'action',
      width: '300px',
      render: (_: Pet, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => showOrder({ petId: record.id })}>
            Order{' '}
          </Button>
          <Button onClick={() => showEditHandle(record)}>Edit </Button>
          <Button type="primary" danger onClick={() => deletePet(record)}>
            Delete{' '}
          </Button>
        </Space>
      ),
    },
  ];

  return <Table scroll={{ x: '100%', y: '57vh' }} style={{marginTop: "20px"}} columns={columns} dataSource={dataSource} rowKey={'id'} loading = {loadingTable}/>;
};

export default TablePet;
