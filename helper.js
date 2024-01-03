function getDateString(date = new Date()) {
  let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
  let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  let hour = date.getHours()
  let range = '10:00-11:00'
  if (hour >= 11) {
    range = '11:00-12:00'
  }
  if (hour >= 12) {
    range = '12:00-13:00'
  }
  return `${year}-${month}-${day} ${range}`
}

window.__getDateStr = getDateString
