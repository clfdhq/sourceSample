import { AppstoreOutlined, PlusCircleOutlined, TableOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space} from 'antd';
import { useEffect, useState } from 'react';
import DuAnCards from '../components/QuanLyDuAn/cardDuAns';
import DrawerDuAnCreate from '../components/QuanLyDuAn/drawerDuAnCreate';
import DrawerDuAnEdit from '../components/QuanLyDuAn/drawerDuAnEdit';
import DuAnTable from '../components/QuanLyDuAn/tableDuAn';
import { DuAn } from '../duan.interfaces';
import { getDataDuAn, IdMax } from '../services/demo.services';

const DuAnList: React.FC = () => {
  const [dataDuAn, setdataDuAn] = useState<DuAn[]>();
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<DuAn>();
  const [listStyle, setListStyle] = useState<string>('List');

  const showEdit = (item: DuAn) => {
    setVisibleEdit(true);
    setItemEdit(item);
  };

  const openListStyle = (style:string) => setListStyle(style)

  const showCreate = () => {
    setVisibleCreate(true);
  };
  const deleteItem = (Id:number) =>{
    setdataDuAn(dataDuAn?.filter(da => da.Id !== Id ))
  }
  const refreshdataDuAn = (itemEdit: DuAn) => {
    let newdataDuAn : any
    if(itemEdit?.Id)
    {
      newdataDuAn = dataDuAn?.map((data: DuAn) => (data.Id === itemEdit.Id ? itemEdit : data));
    }
    else newdataDuAn = {...dataDuAn,...{...itemEdit, Id: IdMax() + 1 }}
    setdataDuAn(newdataDuAn);
  };

  useEffect(() => {
    const getdataDuAnResult = getDataDuAn();
    getdataDuAnResult && setdataDuAn(getdataDuAnResult);
  }, []);

  return (
    <div>
      <Card title="DU AN COMPONENT" style={{ width: '100%' }}
      extra={
        <Space>
          <Button icon={<AppstoreOutlined />} onClick={()=>openListStyle('List')}>Danh sách</Button>
          <Button icon={<TableOutlined />} onClick={()=>openListStyle('Table')}>Bảng</Button>
          <Button type="primary" icon={<PlusCircleOutlined />} onClick={showCreate}>
        Thêm mới
      </Button>
        </Space>
     
      }>
        <Row>
          <Col span={24} hidden={listStyle === 'Table' ? false : true}>
            <DuAnTable dataSource={dataDuAn} showEdit={showEdit} deleteItem={deleteItem}/>
          </Col>
          <Col span={24} hidden={listStyle === 'List' ? false : true }>
            <DuAnCards dataSource={dataDuAn} loading={false} showEdit={showEdit} deleteItem={deleteItem}/>
          </Col>
        </Row>

      </Card>
      <DrawerDuAnEdit
        refreshData={refreshdataDuAn}
        itemEdit={itemEdit}
        visibleEdit={visibleEdit}
        setVisibleEdit={setVisibleEdit}
      />
      <DrawerDuAnCreate
        refreshData={refreshdataDuAn}
        visibleCreate={visibleCreate}
        setVisibleCreate={setVisibleCreate}
      />
    </div>
  );
};

export default DuAnList;
