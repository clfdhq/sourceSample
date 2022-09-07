import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, message, Select, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { Order, Pet } from '../../api/api.type';
import PetDrawer from './pet/component/petDrawer';
import TablePet from './pet/component/petTable';
import { addPet, deletePet, editPet, getPetListByStatus } from './pet/services/pet.services';
import CardStatus from './store/component/cardStatus';
import OrderDrawer from './store/component/orderDrawer';
import {
  addOrder,
  deleteOrder,
  getInventory,
  getOrderDetail,
} from './store/services/store.services';

const { Option } = Select;



interface Inventory {
  [key: string]: string;
}

export const PetPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>();
  const [itemPet, setItemPet] = useState<Pet>();
  const [editOrder, setEditOrder] = useState<Order>();
  const [visibleOrder, setVisibleOrder] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  // const [inventory, setInventory] = useState<string[]>(['available', 'pending', 'sold']);
  //const [visibleInventory, setVisibleInventory] = useState<boolean>(false);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('available');
  const [inventorys, setInventorys] = useState<Inventory>({ inventory: 'Loading....' });
  const [dataFlag, setDataFlag] = useState<Boolean>(false);

  //const [idSearch, setIdSearch] = useState<string>('');

  // const getItemHandle = async (value?: string) => {
  //   setLoadingTable(true);
  //   try {
  //     //console.log(`selected status : ${status}`);
  //     const { data } = await getPetListByStatus(value || status);
  //     const dataPet = data.filter(
  //       (value, index, array) => index === array.findIndex((item) => item.id === value.id)
  //     );
  //     setPets(dataPet);
  //     setLoadingTable(false);
  //   } catch (error) {
  //     console.error('List Error:', error);
  //   }
  // };
  const changeStatus = (value: string) => {
    setStatus(value);
    changeData();
  };

  const changeData = () => {
    setDataFlag(!dataFlag);
  };

  const searchOrder = async (value: string) => {
    try {
      const orderItem = await getOrderDetail(Number(value));
      if (orderItem) {
        setVisibleOrder(true);
        setEditOrder(orderItem.data);
      }
    } catch (error) {
      console.error('Order Error:', error);
      message.error(`Order ${value} is not found`);
    }
  };

  const showPet = (item?: Pet) => {
    setVisibleEdit(true);
    setItemPet(item);
  };

  const closePet = () => {
    setVisibleEdit(false);
  };

  const showOrder = (item?: Order) => {
    setVisibleOrder(true);
    setEditOrder(item);
  };

  const closeOrder = () => {
    setVisibleOrder(false);
  };

  const deleteOnePet = async (item: Pet) => {
    try {
      await deletePet('' + item.id);
      message.success('Đã xóa');
      setDataFlag(!dataFlag);
    } catch (error) {
      console.error('deletePet Error:', error);
    }
  };

  const saveOnePet = async (item: Pet) => {
    try {
      item.id ? await editPet('' + item.id, item) : await addPet(item);
      message.success('Đã lưu');
      setDataFlag(!dataFlag);
    } catch (error) {
      console.error('Lỗi lưu:', error);
    }
  };

  const deletePetOrder = async (item: Order) => {
    try {
      await deleteOrder('' + item.id);
      message.success('Đã xóa');
      //getItemHandle();
    } catch (error) {
      console.error('deletePet Error:', error);
    }
  };

  const savePetOrder = async (item: Order) => {
    try {
      await addOrder(item);
      message.success('Đã lưu');
      setDataFlag(!dataFlag);
    } catch (error) {
      console.error(`addPet Error:`, error);
    }
  };
  // const Inventory = async () => {
  //   try {
  //     const { data } = await getInventory();
  //     const temp = Object.getOwnPropertyNames(data);
  //     setInventory(temp);
  //   } catch (error) {
  //     console.error('get inventory error:', error);
  //   }
  // };

  useEffect(() => {
    const getItemHandle = async (value?: string) => {
      setLoadingTable(true);
      try {
        const { data } = await getPetListByStatus(value || status);
        const dataPet = data.filter(
          (value, index, array) => index === array.findIndex((item) => item.id === value.id)
        );
        setPets(dataPet);
        setLoadingTable(false);
      } catch (error) {
        console.error('List Error:', error);
      }
    };

    const showInventory = async () => {
      try {
        const inventory = await getInventory();
        const { data } = inventory;
        const dataFilter = {
          Available : data.available || '0',
          Pending : data.pending || '0',
          Sold: data.sold || '0',
        }
        setInventorys(dataFilter);
      } catch (error) {
        console.error('get inventory error:', error);
      }
    };

    showInventory();
    getItemHandle();
  }, [status, dataFlag]);

  return (
    <>
      <Card
        title="PET SHOP"
        style={{ width: '100%', marginTop: '20px' }}
        extra={
          <Space>
            <Search
              placeholder="Search Pet OrderID"
              onSearch={searchOrder}
              style={{ width: 200 }}
            />
            <Select
              onChange={changeStatus}
              placeholder="Select a status"
              defaultValue={'available'}
              style={{ width: '200px' }}
            >
              {['available', 'pending', 'sold'].map((i) => (
                <Option value={i} key={i}>
                  {i}
                </Option>
              ))}
            </Select>
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => showPet()}>
              Add a pet
            </Button>
          </Space>
        }
      >
        <CardStatus data={inventorys} />
        <TablePet
          dataSource={pets}
          deletePet={deleteOnePet}
          showEdit={showPet}
          showOrder={showOrder}
          loadingTable={loadingTable}
        />
      </Card>
      <PetDrawer
        refreshData={changeData}
        itemEdit={itemPet}
        visibleEdit={visibleEdit}
        saveItem={saveOnePet}
        closePet={closePet}
      />
      <OrderDrawer
        refreshData={changeData}
        itemEdit={editOrder}
        visibleEdit={visibleOrder}
        closeOrder={closeOrder}
        saveItem={savePetOrder}
        deleteOrder={deletePetOrder}
      />
    </>
  );
};
export default PetPage;
