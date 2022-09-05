import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, Card, Col, Collapse, Row } from 'antd';
import { DATA_NHANSU, DATA_PHONGBAN, dropdownDuAn } from '../../../../data-sample';
import { DuAn } from '../../../../duan.interfaces';
import { getDuAnDetail } from '../../../../services/demo.services';
import ModelThongTinNhanSu from './modelPhongBan';
import { EditOutlined } from '@ant-design/icons';
import ModelPhongBanDuAn from './modelPhongBan';

interface DATAIN {
  Id: number;
  Title: string;
  Manager: string;
  Emplyoeers: string[];
}
const PhongBanDuAn = () => {
  const [visiblePhongBan, setVisiblePhongBan] = useState<boolean>(false);
  //const [idDetail, setIdDetail] = useState<DuAn>();
  //const [ItemDetail, setItemDetail] = useState<any>();

  //const params = useParams();
  //const idDetail = Number(params.id);
  const items = new dropdownDuAn();
  //const typeProjectData = items.ProjectCategory.map((e) => ({ value: e.Id, label: e.value }));

  const showEdit = () => {
    setVisiblePhongBan(true);
    //setItemEdit(item);
  };

  // interface TypeOptProject { value: number; label: string;}

  //const ProjectCategory = dropdownDuAn.ProjectCategory;

  // const openEdit = () => {
  //   setUnEdit(false);
  // };
  // const Ok = () => {
  //   setUnEdit(true);
  // };\

  //const { itemEdit, visibleEdit, setVisibleEdit} = props;

  // const getDetail = () => {
  //   setItemDetail(DATA_NHANSU.find((f) => f.DuAnId === idDetail));
  // };
  const genExtra = () => (
    <EditOutlined
      onClick={() => {
        showEdit();
      }}
    />
  );

  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  // useEffect(() => {
  //   ShowCard(DATA);
  // }, []);

  const { Panel } = Collapse;
  const DATA = DATA_PHONGBAN;
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Phòng ban tham gia dự án" key="1" extra={genExtra()}>
          <Row>
            {DATA.map((element) => (
              <Col span={6}>
                <Card size="small" title={element.Title} extra={<></>} style={{ width: 300 }}>
                  <p>Trưởng phòng: {element.Manager}</p>
                  <p>Nhân Viên: {element.Emplyoeers.toString()}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Panel>
      </Collapse>

      <ModelPhongBanDuAn
        //item={ItemDetail}
        visiblePhongBan={visiblePhongBan}
        setVisiblePhongBan={setVisiblePhongBan}
      ></ModelPhongBanDuAn>
    </>
  );
};
export default PhongBanDuAn;
