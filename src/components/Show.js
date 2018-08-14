import React, {Component} from 'react';
import style from '../routes/DateTable.css';
import { connect } from 'dva'
import moment from 'moment';
import DetailedSchedule from '../components/DetailedSchedule';

let expandDateData=null
class Show extends Component {

  getWeek=()=>{
    switch (moment().isoWeekday()) {
      case 1:
        return '星期一';
      case 2:
        return '星期二';
      case 3:
        return '星期三';
      case 4:
        return '星期四';
      case 5:
        return '星期五';
      case 6:
        return '星期六';
      case 7:
        return '星期日';
    }
  }

  getSchedule=()=>{
    if(this.props.date.dateData.length>0&&this.props.date.currentData!=null){
       this.props.date.dateData.map(
        (data)=>{
          if(data.id===this.props.date.currentData.id){
            expandDateData=data.schedule
          }
        }
      )
    }
    return this.pushSchedule()
  }

  pushSchedule=()=> {
    if (expandDateData!= null) {
      return (
        expandDateData.map(
          (detailedSchedule,index)=>
          <DetailedSchedule
            key={index}
            detailedSchedule={detailedSchedule}
          />
        ))
    }
  }


  render() {
    return (
      <div className={style.modificationWhole}>
        <div className={style.modificationTop}>
          <div className={style.currentYear}>
            <div>
              {moment().format('YYYY') + '年' + moment().format('M') + '月'}
            </div>
          </div>
          <div className={style.currentDay}>
            <div>
              {moment().format('D')}
            </div>
          </div>
          <div className={style.currentWeek}>
            <div >
              {this.getWeek()}
            </div>
          </div>
        </div>
        <div className={style.modificationCenter}>
          <hr className={style.line}/>
        </div>
        <div className={style.modificationBottom}>
          <div className={style.bottomMiddle}>
            {
              this.getSchedule()
            }
          </div>
        </div>
      </div>
    )
  }
}
export default connect((date)=>(date))(Show);
