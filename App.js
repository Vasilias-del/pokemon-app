import { Provider } from 'react-redux';
import HomeRoutes from './src/routes/HomeRoutes';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeRoutes/>
    </Provider>
  );
}