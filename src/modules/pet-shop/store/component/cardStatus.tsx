import { Card, Col, Row, Statistic, Divider } from 'antd';
import { Content } from '../services/store.services';

interface CardStatusProps {
  data: Content;
}

export const CardStatus: React.FC<CardStatusProps> = ({ data }) => {
  //   useEffect(() => {}, []);
  return (
    <>
          <Divider>Amount pets by Status</Divider>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            {Object.entries(data).map((i, index) => {
              const [key, value] = i;
              return (
                <Col span={8} key={`CardStatus_${index}`}>
                  <Card>
                    <Statistic
                      title={key}
                      value={value}
                      precision={0}
                      //   prefix={<FieldNumberOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Divider></Divider>
    </>
  );
};
export default CardStatus;
