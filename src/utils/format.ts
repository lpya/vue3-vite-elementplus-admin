import moment from 'moment'
export const formatTime = (timeStamp: number, format: string) => {
  if (!timeStamp) {
    return '/'
  }
  if (timeStamp < 1) {
    return '/'
  }
  const secondsLen = 10
  if (timeStamp.toString().length === secondsLen) {
    timeStamp = timeStamp * 1000
  }
  if (timeStamp === 0) {
    return ''
  }
  return moment(timeStamp).format(format)
}
export const getDaysInMonth = (timeStamp: number) => {
  const secondsLen = 10
  if (timeStamp.toString().length === secondsLen) {
    timeStamp = timeStamp * 1000
  }
  return moment(timeStamp).daysInMonth()
}

type monthTy = 'start' | 'end'

export const getMonthTime = (timeStamp: number, ty: monthTy, format: string) => {
  const secondsLen = 10
  if (timeStamp.toString().length === secondsLen) {
    timeStamp = timeStamp * 1000
  }
  let time = ''
  if (ty === 'start') {
    time = moment(timeStamp).startOf('month').format(format)
  } else {
    time = moment(timeStamp).endOf('month').format(format)
  }
  return time
}
