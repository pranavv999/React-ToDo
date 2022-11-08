import React from 'react';
import './styles/App.css'
import Header from './components/header/Header';
import Input from './components/input/Input';
import SubmitButton from './components/button/SubmitButton';
import Item from './components/item/Item';

function App() {

  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('')
  const [enterPressed, setEnterPressed] = React.useState(false);

  React.useEffect(() => {
    handleAddItem();
  }, [enterPressed])

  const handleEnterPressed = () => {
    setEnterPressed(!enterPressed);
  }

  const handleChangeInputValue = (value) => {
    setInputValue(value);
  }

  const handleAddItem = () => {
    if(inputValue && inputValue.trim()){
      const id = items.length > 0 ? items[items.length - 1]['id'] + 1: 0 //if adding first item it will assign id=0
      // and for successive adding id will always last item's (id + 1) so no id duplication will happen
      const newItem = {
        id : id,
        value : inputValue
      }
      setItems(prevState => {
        return [...prevState, newItem]}
      );
      setInputValue('')
    }
    enterPressed && handleEnterPressed();
  }

  const handleRemoveItem = (id) => {
    const arr = items.filter((i) => i.id !== id);
    setItems(arr);
  }

  return (
    <div className="App">
      <div className="container">

        <Header title={'ToDo List'}/>

        <div className='content_parent'>

          <div className='input_container'>
            <Input inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} handleEnterPressed={handleEnterPressed}/>
            <SubmitButton handleAddItem={handleAddItem} enterPressed={enterPressed}/>
          </div>

          <ol className='list'>
              {items.map((item) => <Item key={item?.id} item={item} handleRemoveItem={handleRemoveItem}/>)}
          </ol>

        </div>
      </div>
    </div>
  );
}

export default App;
