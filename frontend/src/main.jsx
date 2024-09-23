import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home/Home.jsx'
import "./index.css"
import MainRoutes from "./Routes.jsx"
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes>
      <Home />
    </MainRoutes>,
  </BrowserRouter>,
)
