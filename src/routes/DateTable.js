import React, { Component } from 'react';
import DateFormat from '../components/DateFormat'
import style from './DateTable.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { connect } from 'dva';
import Editor from '../components/Editor';
import Show from '../components/Show'

let position=null
class DateTable extends Component {

    componentDidMount(){
      (()=>{this.props.dispatch({
          type: 'date/addAfterSecond',
        })})()
    }

    onOpen=(currentData)=>{
      this.props.dispatch({
        type: 'date/open',
        payload:currentData
      })
    }

    onClose=()=>{
      this.props.dispatch({
        type: 'date/close'
      })
    }

  getPosition=(event)=>{
    const e = event || window.event;
    position= {'x':e.clientX,'y':e.clientY}
  }

  render() {
    return (
      <div id={style.window} onClick={this.getPosition}>
        <div id={style.body} >
          <div className={style.header}>
            <div className={style.calendarFont}>
            日历
            </div>
          </div>
          <div className={style.content}>
            <div className={style.center}>
            <div className={style.modification} >
              <Show />
            </div>
            <div className={style.main}>
              <div className={style.week}>
                <div className={style.weekNav}>周日</div>
                <div className={style.weekNav}>周一</div>
                <div className={style.weekNav}>周二</div>
                <div className={style.weekNav}>周三</div>
                <div className={style.weekNav}>周四</div>
                <div className={style.weekNav}>周五</div>
                <div className={style.weekNav}>周六</div>
              </div>
              <div className={style.calendar}>
                {this.props.date.show &&<Editor
                  close={this.onClose}
                  onEditSuccess={this.onEditSuccess}
                  x={position.x}
                  y={position.y}
                />}
                {this.props.date.dateData.map((currentData)=>
                  <DateFormat
                    key={currentData.id}
                    currentData={currentData}
                    change={this.onOpen}
                  />
                )}
              </div>
            </div>
            </div>
          </div>
          <div className={style.footer}>&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default connect((date)=>(date))(DateTable);
