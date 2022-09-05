import { Button, message, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dropdownDuAn } from '../../data-sample';
import { DuAn } from '../../duan.interfaces';
//import ChiTietDuAn from './modelDuAn';
interface DuAnTableProps {
  dataSource?: DuAn[];
  deleteItem:Function;
  showEdit: Function;
}

export const DuAnTable: React.FC<DuAnTableProps> = (props: DuAnTableProps) => {
  const { dataSource, showEdit,deleteItem } = props;
  // const [isOpenComponent, showModel] = useState<boolean>(false);
  // const [duAnDetail, setduAnDetail] = useState<DuAn>();
  // const [duAnlist, setduAnList] = useState<DuAn[]>();
  const itemRef = new dropdownDuAn();

  // const openModel = (isOpen: boolean) => {
  //     setisModalVisible(isOpen)

  // const setDuAn = (DuAn: DuAn) => {
  //     setduAnDetail(DuAn)
  // }
  const showEditHandle = (itemEdit: DuAn) => {
    showEdit(itemEdit);
  };
  const goto = useNavigate()

  const getDataHandle = () => {};
  useEffect(() => {
    getDataHandle();
  }, []);

  const onDelete = (Id:number) =>{
    deleteItem(Id)
    message.success('Đã xóa!')
  }
  const columns: ColumnsType<DuAn> = [
    {
      title: 'Code',
      dataIndex: 'ProjectCode',
      key: 'ProjectCode',
    },
    {
      title: 'Tên dự án',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Loại dự án',
      key: 'ProjectCategoryId',
      dataIndex: 'ProjectCategoryId',
      render: (_, { ProjectCategoryId }) => (
        <>
          {ProjectCategoryId.map((item) => {
            let temp = itemRef.ProjectCategory.find((i) => i.Id === item);
            if (temp === undefined) return <></>;
            else
              return (
                <Tag color={temp.color} key={temp.value}>
                  {temp.value.toUpperCase()}
                </Tag>
              );
          })}
        </>
      ),
    },
    {
      title: 'Năm thực hiện',
      dataIndex: 'Year',
      key: 'Year',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'ProjectStatus',
      key: 'ProjectStatus',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
           <Button
            onClick={() => {goto(`${record.Id}` )}}
          >
            {' '}
            Full Detail
          </Button>
          <Button
            onClick={() => {
              showEditHandle(record);}}
          >
            {' '}
            Edit
          </Button>
          <Button onClick = {()=>{
            onDelete(record.Id)
          }}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table rowKey={'id'} columns={columns} dataSource={dataSource} style={{ width: '100%' }} />

      {/* <ChiTietDuAn openComponent = {showModel} isOpenComponent = {isOpenComponent} duAnDetail = {duAnDetail}/> */}
      {/* <DrawerDuAn
        openComponent={showModel}
        isOpenComponent={isOpenComponent}
        duAnDetail={duAnDetail}
        getData = {getDataHandle}
      /> */}
    </>
  );
};

export default DuAnTable;
