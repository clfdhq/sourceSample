import { Descriptions, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { getInventory } from '../services/store.services';

interface InventoryModalPros {
  visible?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Content {
  [key: string]: string;
}
export const InventoryModal:React.FC<InventoryModalPros> = (props) => {
  const {visible, setVisible } = props;
  const [content, setContent] = useState<Content>({'inventory': 'not imformation' });
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  useEffect(() => {
    const showInventory = async () => {
      try {
        const inventory = await getInventory();
        setContent(inventory.data);
      } catch (error) {
        console.error('get inventory error:', error );
      }
    };
    if (visible) 
    {
      showInventory();
    }
  }, [visible, setVisible]);

  return (
    <>
      <Modal
        title={`Inventory Information:`}
        width={720}
        onOk={handleOk} 
        onCancel={handleCancel}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
       <Descriptions>
          {Object.entries(content).map(i => {
            const [key,value] = i;
            return (
                <p key={key} > {key} : {value}</p>
            );
          })}
        </Descriptions>
      </Modal>
    </>
  );
};

export default InventoryModal;
