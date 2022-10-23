import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/*todo: RecoilRoot = recoil 사용할 수 있게 설정*/}
    <RecoilRoot>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App/>}/>
        </Routes>
      </React.StrictMode>
    </RecoilRoot>
  </BrowserRouter>
);

