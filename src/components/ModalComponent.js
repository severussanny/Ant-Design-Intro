import { Component } from 'react';
import { Modal, Input, InputNumber, Select, Radio, DatePicker , Checkbox , Switch} from 'antd';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const plainOptions = ['Apple', 'Pear', 'Orange'];

class ModalClass extends Component {

    constructor(props) {
       super();
        this.state = {
            inputValue: props.object===null ? '': props.object.inputValue,
            inputNumberValue: props.object===null ? 0: props.object.inputNumberValue,
            selectValue: props.object===null ? 'kevin': props.object.selectValue,
            radioButtonValue: props.object===null ? 2: props.object.radioButtonValue,
            textAreaValue: props.object===null ? '': props.object.textAreaValue,
            currentDate:  props.object===null ? new Date(): props.object.currentDate,
            markedDate:  props.object===null ? moment(new Date()) :  moment(props.object.markedDate, 'YYYY-MM-DD') ,
            checkBoxValues: props.object===null ? []: props.object.checkBoxValues,
            boolCheckValue: props.object===null ? false : props.object.boolCheckValue,
        };
      this.handlerSave= this.handlerSave.bind(this);
      this.handlerCancel= this.handlerCancel.bind(this);
      this.inputChangeHandler= this.inputChangeHandler.bind(this);
      this.inputNumberChangeHandler= this.inputNumberChangeHandler.bind(this);
      this.textAreaChangeHandler= this.textAreaChangeHandler.bind(this);
      this.selectHandlerChange = this.selectHandlerChange.bind(this);
      this.radioButtonChangeHandler = this.radioButtonChangeHandler.bind(this);
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
      this.checkBoxChangeHandler = this.checkBoxChangeHandler.bind(this);
      this.changeSwitchHandler = this.changeSwitchHandler.bind(this);

    }

    handlerSave = () => {
        this.props.onSaveButton(this.state);
    }
    handlerCancel = () => {
        this.props.onCancelButton();
    }
    inputChangeHandler=(e)=>{
        this.setState({inputValue:e.target.value});
    }
    inputNumberChangeHandler=(value)=>{
        this.setState({inputNumberValue:value});
    }
    textAreaChangeHandler=(e)=>{
        this.setState({textAreaValue: e.target.value});
    }
    selectHandlerChange = (value) => {
        this.setState({ selectValue: value });
    }
    radioButtonChangeHandler = (e) => {
        this.setState({ radioButtonValue: e.target.value });
    }
    dateChangeHandler = (date, dateString) => {
        // console.log(date);
        // console.log(dateString);
        this.setState({ markedDate: date });
    }
    checkBoxChangeHandler=(checkedValues)=>{
        this.setState({checkBoxValues:checkedValues});
        console.log(checkedValues);
    }
    changeSwitchHandler=(check)=>{
      console.log(check);
      this.setState({boolCheckValue:check});
    }
    render() {
        return <Modal visible={this.props.visible} onOk={this.handlerSave} onCancel={this.handlerCancel}>
            <Input placeholder='Input Text Here' value={this.state.inputValue} onChange={this.inputChangeHandler} />
            <InputNumber placeholder='Input Number Here'  min={0} max={100000}  value={this.state.inputNumberValue} onChange={this.inputNumberChangeHandler}  />
            <Select defaultValue={this.state.selectValue} style={{ width: 120 }} onChange={this.selectHandlerChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="kevin" >Kevin </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <TextArea rows={4} placeholder='This is your text area. Enter your message here.' value={this.state.textAreaValue}  onChange={this.textAreaChangeHandler} ></TextArea>
            {/* <CalenderClass/> */}
            <Radio.Group onChange={this.radioButtonChangeHandler} value={this.state.radioButtonValue}>
                <Radio value={1}>MI</Radio>
                <Radio value={2}>CSK</Radio>
                <Radio value={3}>RCB</Radio>
                <Radio value={4}>GT</Radio>
            </Radio.Group>
            <DatePicker onChange={this.dateChangeHandler} value={this.state.markedDate} />
            <Checkbox.Group options={plainOptions} value={this.state.checkBoxValues} onChange={this.checkBoxChangeHandler} />
            <Switch onChange={this.changeSwitchHandler} defaultChecked={this.state.boolCheckValue}/>
        </Modal>
    }
}
export default ModalClass;
