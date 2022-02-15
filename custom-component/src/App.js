import { AutoComplete } from './component/AutoComplete';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';

function App() {
  return (
    <div className="flex flex-col">
      <Toggle />
      <AutoComplete />
      <Modal />
      <Tab />
    </div>
  );
}

export default App;
