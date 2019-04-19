import React from 'react';
import { connect } from 'dva';

@connect(state => ({ ...state.products, ...state.test }))
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state={
      startTime:'2015-09-24T13:59',
      endTime:'2015-10-24T13:59'
    };
  }
 
  onStartTimeChange=(e)=>{
    this.setState({
      startTime:e.target.value
    });
  }
  onEndTimeChange=(e)=>{
    this.setState({
      endTime:e.target.value
    });
  }
  render() {
    const { startTime, endTime } = this.state;
    return (
      <div>
        <input type='datetime-local' value={startTime} max={endTime} onChange={this.onStartTimeChange}/>--<input type='datetime-local' min={startTime} value={endTime} onChange={this.onEndTimeChange}/>
        
       
      </div>
    );
  }
}
export default Test;

