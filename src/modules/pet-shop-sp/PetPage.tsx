import { Button, message, Select, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { Category, Order, Pet, Tag } from '../../modules/pet-shop-sp/pet.interface';
import TablePetSP from './pet/component/petTable';
import { getItemList } from './services/apiSharePoint';

const { Option } = Select;

export let PetCategory: Category[] = [
  { id: 10, title: 'Real' },
  { id: 9, title: 'Fantasy' },
  { id: 8, title: 'Art' },
];
export let PetTag: Tag[] = [
  { id: 10, title: 'Big' },
  { id: 9, title: 'Nomal' },
  { id: 8, title: 'Small' },
  { id: 7, title: 'Like human' },
  { id: 3, title: 'Fig' },
  { id: 4, title: 'Land' },
  { id: 5, title: 'Bird' },
];

export const PetPageSP = () => {
  const [pets, setData] = useState<Pet[]>();
  const [itemEdit, setEdit] = useState<Pet>();
  const [editOrder, setEditOrder] = useState<Order>();
  const [visibleOrder, setVisibleOrder] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  // const [inventory, setInventory] = useState<string[]>(['available', 'pending', 'sold']);
  const [visibleInventory, setVisibleInventory] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('available');

  //const [idSearch, setIdSearch] = useState<string>('');

  const getPetList = async () => {
    const listName = 'Pet';
    const select = ['Title','Id','Status','CategoryId','TagId','Category/Title','Category/Id','Tag/Title','Tag/Id'].toString();
    const expand = ['Category','Tag'].toString();
    const filter = '';
    const orderby = '';
    const skip = 0;
    const top = 1000;

    try {
       const data = await getItemList<Pet[]>({
        listName: listName,
        select: `${select}`,
        expand: expand,
        filter: filter,
        orderby: orderby,
        skip: skip,
        top: top,
      });
      debugger
      console.log(data)
      //setData(data.data.d?.results);
    } catch (error) {
      throw new Error('getEquipment_list err');
    }
  };
  const onChangeStatus = (value: string) => {
    setStatus(value);
  };
  const onSearchOrder = async (value: string) => {
    try {
      // const orderItem = await getOrderDetail(value);
      // if (orderItem) {
      //   setVisibleOrder(true);
      //   setEditOrder(orderItem.data);
      // }
    } catch (error) {
      console.error('Order Error:', error);
      message.error(`Order ${value} is not found`);
    }
  };
  const showPet = (item?: Pet) => {
    setVisibleEdit(true);
    setEdit(item || undefined);
  };
  const showOrder = (item?: Order) => {
    setVisibleOrder(true);
    setEditOrder(item || undefined);
  };
  const onDeletePet = async (item: Pet) => {
    try {
      // await deletePet('' + item.id);
      // message.success('Đã xóa');
      getPetList();
    } catch (error) {
      console.error('deletePet Error:', error);
    }
  };
  // const onSavePet = async (item: Pet) => {
  //   try {
  //     item.id ? await editPet('' + item.id, item) : await addPet(item);
  //     message.success('Đã lưu');
  //     getPetList();
  //   } catch (error) {
  //     console.error('Lỗi lưu:', error);
  //   }
  // };
  // const onDeleteOrder = async (item: Order) => {
  //   try {
  //     await deleteOrder('' + item.id);
  //     message.success('Đã xóa');
  //     //getItemHandle();
  //   } catch (error) {
  //     console.error('deletePet Error:', error);
  //   }
  // };
  // const onSaveOrder = async (item: Order) => {
  //   try {
  //     await addOrder(item);
  //   } catch (error) {
  //     console.error(`addPet Error:`, error);
  //   }
  //   message.success('Đã lưu');
  //   getPetList();
  // };
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
    if (status) {
      getPetList();
      console.log('Data', pets)
    }
    console.log('useEffect call');
  }, [status]);

  return (
    <>
      <Space>
        <Select onChange={onChangeStatus} placeholder="Select a status" style={{ width: '200px' }}>
          {['available', 'pending', 'sold']?.map((i) => (
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
      <TablePetSP
        dataSource={pets}
        deletePet={onDeletePet}
        showEdit={showPet}
        showOrder={showOrder}
      />
      {/* <PetDrawer
        refreshData={getItemHandle}
        itemEdit={itemEdit}
        visibleEdit={visibleEdit}
        setVisibleEdit={setVisibleEdit}
        saveItem={onSavePet}
      />
      <OrderDrawer
        refreshData={getItemHandle}
        itemEdit={editOrder}
        visibleEdit={visibleOrder}
        setVisibleEdit={setVisibleOrder}
        saveItem={onSaveOrder}
        onDeleteOrder={onDeleteOrder}
      />
      <InventoryModal visible={visibleInventory} setVisible={setVisibleInventory} /> */}
    </>
  );
}
export default PetPageSP ;
