import React from "react";
import {createRoot} from "react-dom/client";
import BaseRouter from './router/index.jsx'
import './assets/base.less'

const root = document.getElementById('root');
createRoot(root).render(<BaseRouter />);