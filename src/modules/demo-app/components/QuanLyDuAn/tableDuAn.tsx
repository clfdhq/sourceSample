import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dropdownDuAn } from '../../data-sample';
import { DuAn } from '../../duan.interfaces';
//import ChiTietDuAn from './modelDuAn';
interface DuAnTableProps {
  dataSource?: DuAn[];
  deleteItem:Function;
  showEdit: Function;
}

export const DuAnTable: React.FC<DuAnTableProps> = ({dataSource, showEdit,deleteItem }) => {
  // const [isOpenComponent, showModel] = useState<boolean>(false);
  // const [duAnDetail, setduAnDetail] = useState<DuAn>();
  // const [duAnlist, setduAnList] = useState<DuAn[]>();
  const itemRef = new dropdownDuAn();

  // const openModel = (isOpen: boolean) => {
  //     setisModalVisible(isOpen)

  // const setDuAn = (DuAn: DuAn) => {
  //     setduAnDetail(DuAn)
  // }
  // const showEditHandle = (itemEdit: DuAn) => {
  //   showEdit(itemEdit);
  // };
  const goto = useNavigate()

  const getDataHandle = () => {};
  useEffect(() => {
    getDataHandle();
  }, []);

  // const onDelete = (Id:number) =>{
  //   deleteItem(Id)
  //   message.success('Đã xóa!')
  // }
  const columns: ColumnsType<DuAn> = [
    {
      title: '#',
      render : (a,b,i) => i+1,
      width:'30px'
    },
    {
      title: 'Mã dự án',
      dataIndex: 'ProjectCode',
      key: 'ProjectCode',
      width:'250px',
      render: (text,record) => <a onClick={() => {goto(`${record.Id}` )}}>{text}</a>
    },
    // {
    //   title: 'Tên dự án',
    //   dataIndex: 'Title',
    //   key: 'Title',
    // },
    {
      title: 'Loại dự án',
      key: 'ProjectCategoryId',
      dataIndex: 'ProjectCategoryId',
      width:'200px',
      render: (_, { ProjectCategoryId }) => (
        <>
          {ProjectCategoryId.map((item) => {
            const temp = itemRef.ProjectCategory.find((i) => i.Id === item);
            if (temp) 
            return (
                <Tag color={temp.color} key={'ProjectCategoryId_'+ temp.Id}>
                  {temp.value.toUpperCase()}
                </Tag>
              );
            else return null
             
          })}
        </>
      ),
    },
    {
      title: 'Địa điểm',
      dataIndex: 'Location',
      key: 'Location',
      width:'300px'
    },
    {
      title: 'Năm thực hiện',
      dataIndex: 'Year',
      key: 'Year',
      width:'100px'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'ProjectStatus',
      key: 'ProjectStatus',
      width:'200px',
      render: (status) => {
        const tagColor = itemRef.TinhTrang.find((i) => i.value === status)?.color
        return (
          <Tag color={tagColor}>
                  {status.toUpperCase()}
                </Tag>
        )
    }
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //        <Button
    //         onClick={() => {goto(`${record.Id}` )}}
    //       >
    //         {' '}
    //         Full Detail
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           showEditHandle(record);}}
    //       >
    //         {' '}
    //         Edit
    //       </Button>
    //       <Button type="primary" danger onClick = {()=>{
    //         onDelete(record.Id)
    //       }}>Delete</Button>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <>
      <Table  scroll={{ x: '100%', y: '50vh' }} rowKey={'Id'} columns={columns} dataSource={dataSource} style={{ width: '100%' }} />
    </>
  );
};

export default DuAnTable;
