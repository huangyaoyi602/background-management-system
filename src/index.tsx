import React from 'react'
import {useLocalStore} from 'mobx-react'
import ReactDom from 'react-dom'
import 'mobx-react-lite/batchingForReactDom';

import App from './App'



ReactDom.render(<App />,document.getElementById("root"))