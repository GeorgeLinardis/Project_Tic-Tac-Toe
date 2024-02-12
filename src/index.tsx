import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint as HTMLElement).render(<App />);
