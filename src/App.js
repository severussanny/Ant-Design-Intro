import { Button } from 'antd';
import { React, Component } from 'react';
import './App.css';
import ModalClass from './components/ModalComponent';


class App extends Component {
  // state={visible:false};
  constructor() {
    super();
    const userData = JSON.parse(localStorage.getItem('user'));
    this.state = {
      visible: false,
      userObject: userData
    };
    this.showModalHandler=this.showModalHandler.bind(this);
    this.saveButtonHandler= this.saveButtonHandler.bind(this);
    this.cancelButtonHandler= this.cancelButtonHandler.bind(this);
    this.deleteLocalStorageHandler= this.deleteLocalStorageHandler.bind(this);
    console.log(this.state.userObject);
    // console.log(this.state.userObject.markedDate);
    // console.log(typeof this.state.userObject.markedDate);
  }

  showModalHandler = (e) => {
    // console.log(e);
    this.setState({ visible: true });
  }

  saveButtonHandler = (object) => {
    this.setState({ visible: false });
    console.log(object);
    localStorage.setItem('user', JSON.stringify(object));
    this.setState({ userObject: object });
  }
  cancelButtonHandler = (e) => {
    this.setState({ visible: false });
  }
  deleteLocalStorageHandler = () => {
     localStorage.removeItem('user');
     this.setState({userObject:null});
  }
  render() {
    return <div>
      <Button type='primary' onClick={this.showModalHandler} style={{ marginRight: '10px' }}> Open Modal</Button>
      <ModalClass visible={this.state.visible} onSaveButton={this.saveButtonHandler} onCancelButton={this.cancelButtonHandler} object={this.state.userObject} />
      <Button type='primary' onClick={this.deleteLocalStorageHandler}> Delete Local Storage Data</Button>
    </div>

  }
}

export default App;
