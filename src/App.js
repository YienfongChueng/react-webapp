import './App.css';
import './assets/font/iconfont.css'
import {routes} from './router'
import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const isShow = window.localStorage.getItem('navShow')
  const [navShow,setNavShow] = useState(isShow)

  return (
    <div className="App">
      <BrowserRouter>
        {/* 内容区域 */}
        <Routes>
          {
            routes.map(item => <Route key={item.path} path={item.path} element={<item.component/>} />)
          }
          <Route  />
        </Routes>

        {/* 底部导航 */}
        {navShow && <Nav/>}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
