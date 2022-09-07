import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Collapse, Divider, message, Row, Space, Table, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dropdownDuAn } from '../../data-sample';
import { DuAn } from '../../duan.interfaces';
//import ChiTietDuAn from './modelDuAn';

interface DuAnCardProps {
  dataSource?: DuAn[];
  loading: boolean;
  deleteItem: (itemId: number) => void;
  showEdit: (item: DuAn) => void;
}

const { Panel } = Collapse;

export const DuAnCards: React.FC<DuAnCardProps> = ({
  dataSource,
  loading,
  showEdit,
  deleteItem,
}) => {
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

  const goto = useNavigate();

  const getDataHandle = () => {};
  useEffect(() => {
    getDataHandle();
  }, []);

  const getTagColorStatus = (status?: string) => {
    return itemRef.TinhTrang.find((i) => i.value === status)?.color;
  };

  const onDelete = (Id: number) => {
    deleteItem(Id);
    message.success('Đã xóa!');
  };

  return (
    <Row gutter={16}>
      {dataSource?.map((da) => (
        <Col span={7} key={`DuAnCards_${da.Id}`} style={{ marginTop: '10px', minWidth:'500px' }}>
          <Card
            title={
                <Row gutter={16}>
                  <Col span={24} style={{}}>
                    {da.ProjectCode}
                  </Col>
                  <Col span={24}>
                    {da.ProjectCategoryId.map((item) => {
                      const temp = itemRef.ProjectCategory.find((i) => i.Id === item);
                      if (temp)
                        return (
                          <Tag color={temp.color} key={'DuAnCards_ProjectCategoryId_' + temp.Id}>
                            {temp.value.toUpperCase()}
                          </Tag>
                        );
                      else return null;
                    })}
                  </Col>
                </Row>
            }
            style={{ marginTop: '5px' }}
            loading={loading}
            extra={da.Year}
          >
            <Tag color={getTagColorStatus(da?.ProjectStatus)}>{da.ProjectStatus}</Tag>
            <Divider></Divider>
            <Row gutter={16}>
              <Col>
              <Button size={'small'} onClick={() => {goto(`${da.Id}` )}}>Thông tin chi tiết dự án</Button>
              </Col>
              <Col>
              <Button size={'small'}> Phân công công việc</Button>
              </Col>
              <Col>
              <Button size={'small'}> Hồ sơ lưu trữ</Button>
              </Col>
            </Row>
          </Card>
          <Collapse defaultActiveKey={['1']}>
          <Panel header="Địa điểm" key="3">
             {da.Location} 
          </Panel>
          </Collapse>
        </Col>
      ))}
    </Row>
  );
};

export default DuAnCards;

//Thông tin chi tiết dự án
//Phân công công việc
//Hồ sơ lưu trữ
