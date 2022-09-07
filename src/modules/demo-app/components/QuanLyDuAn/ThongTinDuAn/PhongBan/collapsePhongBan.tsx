import { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Collapse, Row } from 'antd';
import { DATA_PHONGBAN } from '../../../../data-sample';

import { EditOutlined } from '@ant-design/icons';
import ModelPhongBanDuAn from './modelPhongBan';

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

  const { Panel } = Collapse;
  const DATA = DATA_PHONGBAN;
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Phòng ban tham gia dự án" key="3" 
        extra={ <EditOutlined onClick={showEdit}/>}>
          <Row>
            {DATA.map((element,index) => (
              <Col span={6} key={element.Title+index}>
                <Card size="small" title={element.Title} style={{ width: 300 }}>
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
