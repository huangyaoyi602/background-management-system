import React from 'react'
import {useLocalStore} from 'mobx-react'
import ReactDom from 'react-dom'
import 'mobx-react-lite/batchingForReactDom';

import {stores,StoresContext,createStores} from './stores'
import App from './App'



ReactDom.render(<App />,document.getElementById("root"))