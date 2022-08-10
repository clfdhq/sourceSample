import { Routes, Route } from 'react-router-dom';
import App from '../App';
//import SendEmail from '../pages/admin/SendEmail';
// import UploadFile from '../pages/admin/UploadFile';
// import ShowData from '../pages/admin/GetData';
// import Detail from '../pages/admin/Detail';
import NotFound from '../modules/demo-app/pages/NotFound';
import DemoList from '../modules/demo-app/pages/Demo.list';
//import ConfigItem from '../pages/dev/ConfigItem';



function setRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="demo" element={<DemoList />} />

        {/* No other routes match */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default setRoutes;
