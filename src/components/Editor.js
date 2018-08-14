import React, { Component } from 'react';
import style from'../routes/DateTable.css';
import { connect } from 'dva/index'

let theme=null
let schedule=null
class Editor extends Component{

  setTheme=(event)=>{
    theme=event.target.value
  }

  setSchedule=(event)=>{
    schedule=event.target.value
  }

  onEditSuccess=()=>{
    let model=this.props.date.currentData.schedule
    model.push(schedule)
    const currentData={
      ...this.props.date.currentData,
      schedule:model
    }
    this.props.dispatch({
      type:'date/save',
      payload:currentData
    })
    this.props.dispatch({
      type:'date/close',
    })
  }

  render() {
   const {x,y}=this.props
    return(
      <div className={style.Popup}>
          <div className={style.suspension} id='windows' style={{left:x,top:y}}>
            <div className={style.title}>新建日程</div>
            <div className={style.theme}>
              <div>&nbsp; &nbsp;主&nbsp;&nbsp; 题：</div>
              <div>
                <input
                  id='theme'
                  onChange={this.setTheme}
                  placeholder={this.props.date.dateData[this.props.date.currentData.id].theme}
                />
            </div>
            </div>
            <div className={style.schedule}>
              <div>日程安排：</div>
              <textarea
                className={style.schedulecontent}
                onChange={this.setSchedule}
                placeholder={this.props.date.dateData[this.props.date.currentData.id].schedule}
              />
            </div>
            <div className={style.choose}>
              <button
                className={style.true}
                onClick={this.onEditSuccess}
              >
                确定
              </button>
              <button
                className={style.false}
                onClick={this.props.close}
              >
                取消
              </button>
            </div>
            {/*{this.state.loading &&
             <div><div style={{display:'none'}}>{setTimeout(this.props.close,2000)}</div>保存中...</div>
            }*/}
          </div>
      </div>
    )
  }

}
export default connect((date)=>(date))(Editor);
