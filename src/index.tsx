import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers/combined-reducers';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { Provider } from 'react-redux';

import './index.scss';

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
