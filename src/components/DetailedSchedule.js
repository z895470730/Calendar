import React, {Component} from 'react';
import style from '../routes/DateTable.css';

class DetailedSchedule extends Component{

  render(){
    {console.log('sss')}
    const {detailedSchedule}=this.props
    return(
      <div className={style.oneDaySchedule}>
        {detailedSchedule}
      </div>
    )
  }
}

export default DetailedSchedule
