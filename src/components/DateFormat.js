import React, { Component } from 'react';
import '../routes/DateTable.css';
import style from '../routes/DateTable.css';
class DateFormat extends Component{
  constructor (props){
    super(props)
  }

  render() {
    const {currentData,change}=this.props
    return(
      <div  key={currentData.id} className={style.everyday} onClick={()=>change(currentData)}>
        <div className={style.day} >
          <div>
          <span className={style.gregorianCalendar}>
            {currentData.date}
          </span>
            <span className={style.lunarCalendar}>
            {currentData.lunarCalendar}
          </span>
          </div>
          <span className={style.holiday} >
          {this.props.currentData.note}
        </span>
        </div>
      </div>
    );
  }
}

export default  DateFormat
