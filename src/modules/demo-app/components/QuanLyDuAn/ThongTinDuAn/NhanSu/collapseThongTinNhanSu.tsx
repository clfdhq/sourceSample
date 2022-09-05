import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, Card, Col, Collapse, Descriptions, Row } from 'antd';
import { DATA_NHANSU, dropdownDuAn } from '../../../../data-sample';
import { DuAn } from '../../../../duan.interfaces';
import { getDuAnDetail } from '../../../../services/demo.services';
import ModelThongTinNhanSu from './modelThongTinNhanSu';
import { EditOutlined } from '@ant-design/icons';

const ThongTinNhanSu = () => {
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  //const [itemEdit, setItemEdit] = useState<DuAn>();
  const [ItemDetail, setItemDetail] = useState<any>();

  const params = useParams();
  const idDetail = Number(params.id);
  const items = new dropdownDuAn();
  const typeProjectData = items.ProjectCategory.map((e) => ({ value: e.Id, label: e.value }));

  const showEdit = () => {
    setVisibleEdit(true);
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

  const getDetail = () => {
    setItemDetail(DATA_NHANSU.find((f) => f.DuAnId === idDetail));
  };

  const genExtra = () => (
    <EditOutlined
      onClick={() => {
        showEdit();
        // If you don't want click extra trigger collapse, you can prevent this:
      }}
    />
  );

  // const onClose = () => {
  //   setVisibleEdit(false);
  // };

  useEffect(() => {
    getDetail();
  }, [ItemDetail]);
  const { Panel } = Collapse;
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Nhân sự quản trị dự án" key="1" extra={genExtra()}>
          <Descriptions>
            <Descriptions.Item label="Giám đốc dự án">{ItemDetail?.ProjectManager}</Descriptions.Item>
            <Descriptions.Item label="Thư ký dự án">{ItemDetail?.SiteSecretary}</Descriptions.Item>
            <Descriptions.Item label="Giám đốc tài chính">{ItemDetail?.FinanceDirector}</Descriptions.Item>
            <Descriptions.Item label="Tổng giám đốc">{ItemDetail?.Director}</Descriptions.Item>
          </Descriptions>
        </Panel>
      </Collapse>

      <ModelThongTinNhanSu
        item={ItemDetail}
        visibleThongTinCoBan={visibleEdit}
        setVisibleThongTinCoBan={setVisibleEdit}
      ></ModelThongTinNhanSu>
    </>
  );
};
export default ThongTinNhanSu;
