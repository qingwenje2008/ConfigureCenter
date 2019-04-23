import React from 'react';
import { connect } from 'dva';
import DatePicker from 'react-datepicker';
import DateTimePicker from 'react-datetime-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datetime-picker/src/DateTimePicker.less';
@connect(state => ({ ...state.products, ...state.test }))
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state={
      startTime:'2015-09-24T00:00',
      endTime:'2015-10-24T13:59',
      startDate: new Date(),
      date: new Date(),
      disabled: false,
      locale: null,
      maxDate: null,
      maxDetail: 'minute',
      minDate: null,
      required: true,
      showLeadingZeros: true,
      showNeighboringMonth: false,
      showWeekNumbers: false,
      value: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  onStartTimeChange=(e)=>{
    this.setState({
      startTime:e.target.value
    });
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  onEndTimeChange=(e)=>{
    this.setState({
      endTime:e.target.value
    });
  }
  onChange = date => this.setState({ date })
  render() {
    const { startTime, endTime } = this.state;
    const {
      disabled,
      locale,
      maxDate,
      maxDetail,
      minDate,
      required,
      showLeadingZeros,
      showNeighboringMonth,
      showWeekNumbers,
      value,
    } = this.state;
    return (
      <div>
        <input type='datetime-local' value={startTime} max={endTime} onChange={this.onStartTimeChange}/>--<input type='datetime-local' min={startTime} value={endTime} onChange={this.onEndTimeChange}/>
        <DatePicker
          selected={this.state.startDate}
          showTimeSelect
          dateFormat="Pp"
          onChange={this.handleChange}
        />
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
          disableClock={true}
          format={'yyyy-MM-dd hh:mm'}
          // disabled={true}
        />
         {/* <DateTimePicker
                className="myCustomTimePickerClassName"
                calendarClassName="myCustomCalendarClassName"
                clockClassName="myCustomClockClassName"
                disabled={disabled}
                locale={locale}
                maxDetail={maxDetail}
                maxDate={maxDate}
                minDate={minDate}
                name="myCustomName"
                onChange={this.onChange}
                onCalendarOpen={() => console.log('Calendar opened')}
                onCalendarClose={() => console.log('Calendar closed')}
                onClockOpen={() => console.log('Clock opened')}
                onClockClose={() => console.log('Clock closed')}
                required={required}
                showLeadingZeros={showLeadingZeros}
                showNeighboringMonth={showNeighboringMonth}
                showWeekNumbers={showWeekNumbers}
                value={value}
              /> */}
      </div>
    );
  }
}
export default Test;

