import { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Collapse, Row } from 'antd';
import { DATA_PHONGBAN } from '../../../../data-sample';

import { EditOutlined } from '@ant-design/icons';
import ModelPhongBanDuAn from './formPhongBan';

// interface DATAIN {
//   Id: number;
//   Title: string;
//   Manager: string;
//   Emplyoeers: string[];
// }
const PhongBanDuAn = () => {
  const [visiblePhongBan, setVisiblePhongBan] = useState<boolean>(false);

  const showEdit = () => {
    setVisiblePhongBan(true);
  };

  const close =() =>{
    setVisiblePhongBan(false);
  }

  const { Panel } = Collapse;
  const DATA = DATA_PHONGBAN;
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Phòng ban tham gia dự án" key="3" 
        
        extra={ <EditOutlined onClick={event =>{event.stopPropagation(); showEdit()}}/>}>
          <Row gutter={16}>
            {DATA.map((element) => (
              <Col span={7} key={element.Title+element.Id} style={{marginTop: '10px', minWidth: '300px' }}>
                <Card title={element.Title} >
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
        close={close}
      ></ModelPhongBanDuAn>
    </>
  );
};
export default PhongBanDuAn;
