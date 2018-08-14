export default {
  namespace: 'date',
  state: {
    dateData:[],
    show:false,
    currentData: null,
  },
  effects: {
    * addAfterSecond (action, {put}) {
      const dateData = [
        {
          id: '0',
          date: '1',
          lunarCalendar: '十八',
          note: '建党节',
          schedule:[]
        },

        {
          id: '1',
          date: '2',
          lunarCalendar: '十九',
          note: '',
          schedule:[]
        },

        {
          id: '2',
          date: '3',
          lunarCalendar: '二十',
          note: '',
          schedule:[]
        },

        {
          id: '3',
          date: '4',
          lunarCalendar: '廿一',
          note: '',
          schedule:[]
        },

        {
          id: '4',
          date: '5',
          lunarCalendar: '廿二',
          note: '',
          schedule:[]
        },

        {
          id: '5',
          date: '6',
          lunarCalendar: '廿三',
          note: '',
          schedule: []
        },

        {
          id: '6',
          date: '7',
          lunarCalendar: '廿四',
          note: '',
          schedule:[]
        },

        {
          id: '7',
          date: '8',
          lunarCalendar: '廿五',
          note: '',
          schedule:[]
        },

        {
          id: '8',
          date: '9',
          lunarCalendar: '廿六',
          note: '',
          schedule:[]
        },

        {
          id: '9',
          date: '10',
          lunarCalendar: '廿七',
          note: '',
          schedule:[]
        },

        {
          id: '10',
          date: '11',
          lunarCalendar: '廿八',
          note: '',
          schedule:[]
        },

        {
          id: '11',
          date: '12',
          lunarCalendar: '廿九',
          note: '',
          schedule:[]
        },

        {
          id: '12',
          date: '13',
          lunarCalendar: '六月',
          note: '',
          schedule:[]
        },

        {
          id: '13',
          date: '14',
          lunarCalendar: '初二',
          note: '',
          schedule:[]
        },

        {
          id: '14',
          date: '15',
          lunarCalendar: '初三',
          note: '',
          schedule:[]
        },

        {
          id: '15',
          date: '16',
          lunarCalendar: '初四',
          note: '',
          schedule:[]
        },

        {
          id: '16',
          date: '17',
          lunarCalendar: '初五',
          note: '',
          schedule:[]
        },

        {
          id: '17',
          date: '18',
          lunarCalendar: '初六',
          note: '',
          schedule:[]
        },

        {
          id: '18',
          date: '19',
          lunarCalendar: '初七',
          note: '',
          schedule:[]
        },

        {
          id: '19',
          date: '20',
          lunarCalendar: '初八',
          note: '',
          schedule:[]
        },

        {
          id: '20',
          date: '21',
          lunarCalendar: '初九',
          note: '',
          schedule:[]
        },

        {
          id: '21',
          date: '22',
          lunarCalendar: '初十',
          note: '',
          schedule:[]
        },

        {
          id: '22',
          date: '23',
          lunarCalendar: '十一',
          note: '',
          schedule:[]
        },

        {
          id: '23',
          date: '24',
          lunarCalendar: '十二',
          note: '',
          schedule:[]
        },

        {
          id: '24',
          date: '25',
          lunarCalendar: '十三',
          note: '',
          schedule:[]
        },

        {
          id: '25',
          date: '26',
          lunarCalendar: '十四',
          note: '',
          schedule:[]
        },

        {
          id: '26',
          date: '27',
          lunarCalendar: '十五',
          note: '',
          schedule:[]
        },

        {
          id: '27',
          date: '28',
          lunarCalendar: '十六',
          note: '',
          schedule:[]
        },

        {
          id: '28',
          date: '29',
          lunarCalendar: '十七',
          note: '',
          schedule: []
        },

        {
          id: '29',
          date: '30',
          lunarCalendar: '十八',
          note: '',
          schedule:[]
        },

        {
          id: '30',
          date: '31',
          lunarCalendar: '十九',
          note: '',
          schedule:[]
        },
      ]
      yield put({type: 'init', payload: dateData})
    },
  },
  reducers: {
    init (state, {payload: dateData}) {
      return {
        ...state,
        dateData: dateData
      }
    },
    open (state, {payload: currentData}) {
      return {
        ...state,
        show: true,
        currentData: currentData
      }
    },
    close (state) {
      return {
        ...state,
        show: false
      }
    },
    save (state, {payload: currentData}){
     const arr= state.dateData.map(
       (data)=>{
         if(data.id===currentData.id){
           return currentData
         }
         return data
       }
     )
      return{
        ...state,
        dateData:arr
      }
    }
  }

};
