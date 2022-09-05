import { Button, Space} from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { Category, Pet, Tag } from '../../pet.interface';


export interface TablePetPros {
  dataSource?: Pet[];
  showEdit: Function;
  deletePet: Function;
  showOrder: Function;
}
export const TablePetSP: React.FC<TablePetPros> = (props: TablePetPros) => {
  const { dataSource, deletePet, showEdit, showOrder } = props;
  const showEditHandle = (itemEdit: Pet) => {
    showEdit(itemEdit);
  };

  const columns: ColumnsType<Pet> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'name',
      render: (_) => _
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_:Category,{category}) =>  category?.title// ( value property,record ,index)
    },
    // {
    //   title: 'CategoryJSON',
    //   dataIndex: 'category',
    //   key: 'category',
    //   render: (_:Category) =>  JSON.stringify(_)// (value,record ,index)
    // },
    {
      title: 'Tags',
      key: 'Tag',
      dataIndex: 'Tag',
      render: (_:Tag, { tags }) => tags?.map((t) => ' ' + t.title).toString(),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_ : Pet, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => showOrder({ petId: record.id })}>
            Order{' '}
          </Button>
          <Button onClick={() => showEditHandle(record)}>
            Edit{' '}
          </Button>
          <Button type="primary" danger onClick={() => deletePet(record)}>
            Delete{' '}
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} rowKey={'id'}/>;
};

export default TablePetSP;
