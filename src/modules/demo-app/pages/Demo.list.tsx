import { Card } from 'antd';
import { useEffect, useState } from 'react';
import DemoDrawer from '../components/Demo.drawer';
import DemoTable from '../components/Demo.table';
import { DataSample } from '../demo.interfaces';
import { getData } from '../services/demo.services';

const DemoList: React.FC = () => {
    const [dataDemo, setDataDemo] = useState<DataSample[]>();
    const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
    const [itemEdit, setItemEdit] = useState<DataSample>();

    const showEdit = (item: DataSample) => {
        setVisibleEdit(true);
        setItemEdit(item);
    }

    const refreshDataDemo = (itemEdit: DataSample) => {
        const newDataDemo = dataDemo?.map((data: DataSample) => data.id === itemEdit.id ? itemEdit : data);
        setDataDemo(newDataDemo);
    };

    useEffect(() => {
        const getDataDemoResult = getData();
        getDataDemoResult && setDataDemo(getDataDemoResult);
    }, []);


    return (
        <div>
            <Card title="DEMO COMPONENT" style={{ width: '100%' }}>
                <DemoTable dataSource={dataDemo} showEdit={showEdit} />
            </Card>

            <DemoDrawer refreshData={refreshDataDemo} itemEdit={itemEdit} visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} />
        </div>
    );
};

export default DemoList;
