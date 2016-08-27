import '../../public/css/main.css';
import {render} from 'react-dom';
import React from 'react';
import {store} from '../_store/basicStore';
import Bowling from '../_components/Bowling';

render(<Bowling bowling={store.getState()}/>, document.getElementById('app'));