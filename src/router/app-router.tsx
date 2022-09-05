import { Routes, Route } from 'react-router-dom';
import App from '../App';
//import SendEmail from '../pages/admin/SendEmail';
// import UploadFile from '../pages/admin/UploadFile';
// import ShowData from '../pages/admin/GetData';
// import Detail from '../pages/admin/Detail';
import NotFound from '../modules/demo-app/pages/NotFound';
import DemoList from '../modules/demo-app/pages/Demo.list';
import DuAnList from '../modules/demo-app/pages/DuAn.list';
import DuAnDetail from '../modules/demo-app/pages/DuAn.detail';
import { PetPage } from '../modules/pet-shop/PetPage';
//import ConfigItem from '../pages/dev/ConfigItem';

function setRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="demo" element={<DemoList />} />
        <Route path="duan" element={<DuAnList />} />
        <Route path="pet" element={<PetPage />} />
        {/* <Route path="petsp" element={<PetPageSP />} /> */}
        <Route path="duan/:id" element={<DuAnDetail />} />
        {/* No other routes match */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default setRoutes;
