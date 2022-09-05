import { Button, message, Select, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { Category, Order, Pet, Tag } from '../../api/api.type';
import PetDrawer from './pet/component/petDrawer';
import TablePet from './pet/component/petTable';
import { addPet, deletePet, editPet, getPetListByStatus } from './pet/services/pet.services';
import { InventoryModal } from './store/component/inventorModal';
import OrderDrawer from './store/component/orderDrawer';
import { addOrder, deleteOrder, getOrderDetail } from './store/services/store.services';

const { Option } = Select;

export const PetCategory: Category[] = [
  { id: 10, name: 'Real' },
  { id: 9, name: 'Fantasy' },
  { id: 8, name: 'Art' },
];
export const PetTag: Tag[] = [
  { id: 10, name: 'Big' },
  { id: 9, name: 'Nomal' },
  { id: 8, name: 'Small' },
  { id: 7, name: 'Like human' },
  { id: 3, name: 'Fig' },
  { id: 4, name: 'Land' },
  { id: 5, name: 'Bird' },
];

export const PetPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>();
  const [itemPet, setItemPet] = useState<Pet>();
  const [editOrder, setEditOrder] = useState<Order>();
  const [visibleOrder, setVisibleOrder] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  // const [inventory, setInventory] = useState<string[]>(['available', 'pending', 'sold']);
  const [visibleInventory, setVisibleInventory] = useState<boolean>(false);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('available');

  //const [idSearch, setIdSearch] = useState<string>('');

  const getItemHandle = async () => {
    setLoadingTable(true)
    try {
      //console.log(`selected status : ${status}`);
      const { data } = await getPetListByStatus(status); //filter((value, index, array) => index === array.findIndex((item) => item.id === value.id))
      const dataPet = data.filter(
        (value, index, array) => index === array.findIndex((item) => item.id === value.id)
      );
      setPets(dataPet);
      setLoadingTable(false)
    } catch (error) {
      console.error('List Error:', error);
    }
  };
  const onChangeStatus = (value: string) => {
    setStatus(value);
  };
  const onSearchOrder = async (value: string) => {
    try {
      const orderItem = await getOrderDetail(value);
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
  const showOrder = (item?: Order) => {
    setVisibleOrder(true);
    setEditOrder(item);
  };
  const deleteOnePet = async (item: Pet) => {
    try {
      await deletePet('' + item.id);
      message.success('Đã xóa');
      getItemHandle();
    } catch (error) {
      console.error('deletePet Error:', error);
    }
  };
  const saveOnePet = async (item: Pet) => {
    try {
      item.id ? await editPet('' + item.id, item) : await addPet(item);
      message.success('Đã lưu');
      getItemHandle();
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
    } catch (error) {
      console.error(`addPet Error:`, error);
    }
    message.success('Đã lưu');
    getItemHandle();
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
    const reloadPetTable = async () => {
      setLoadingTable(true)
      try {
        //console.log(`selected status : ${status}`);
        const { data } = await getPetListByStatus(status); //filter((value, index, array) => index === array.findIndex((item) => item.id === value.id))
        const dataPet = data.filter(
          (value, index, array) => index === array.findIndex((item) => item.id === value.id)
        );
        setPets(dataPet);
        setLoadingTable(false)
      } catch (error) {
        console.error('List Error:', error);
      }
    };
    if (status) {
       reloadPetTable()
    }
    console.log('useEffect call');
  }, [status]);

  return (
    <>
      <Space>
        <Select
          onChange={onChangeStatus}
          placeholder="Select a status"
          style={{ width: '200px' }}
          defaultValue={'available'}
        >
          {['available', 'pending', 'sold'].map((i) => (
            <Option value={i} key={i}>
              {i}
            </Option>
          ))}
          {/* <Option value="available">available</Option>
          <Option value="pending">pending</Option>
          <Option value="sold">sold</Option> */}
        </Select>
        <Button onClick={() => showPet()} type="primary">
          Add a pet
        </Button>
        <Button
          onClick={() => {
            setVisibleInventory(true);
          }}
          type="primary"
        >
          Inventory information
        </Button>
        <Search placeholder="Search Pet OrderID" onSearch={onSearchOrder} style={{ width: 200 }} />
        {/* <Button onClick={() => showOrder()} type="primary" style={{ marginBottom: 16 }}>
        Add new Order
      </Button> */}
      </Space>

      <TablePet 
        dataSource={pets}
        deletePet={deleteOnePet}
        showEdit={showPet}
        showOrder={showOrder}
        loadingTable = {loadingTable}
      />

      <PetDrawer
        refreshData={getItemHandle}
        itemEdit={itemPet}
        visibleEdit={visibleEdit}
        setVisibleEdit={setVisibleEdit}
        saveItem={saveOnePet}
      />
      <OrderDrawer
        refreshData={getItemHandle}
        itemEdit={editOrder}
        visibleEdit={visibleOrder}
        setVisibleEdit={setVisibleOrder}
        saveItem={savePetOrder}
        onDeleteOrder={deletePetOrder}
      />
      <InventoryModal visible={visibleInventory} setVisible={setVisibleInventory} />
  </>
  );
};
export default PetPage;
