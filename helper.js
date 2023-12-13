function getDateString(date = new Date()) {
  let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
  let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  let hour = date.getHours()
  let range = '10:00-12:00'
  if (hour >= 12) {
    range = '12:00-14:00'
  }
  if (hour >= 14) {
    range = '14:00-16:00'
  }
  if (hour >= 16) {
    range = '16:00-18:00'
  }
  return `${year}-${month}-${day} ${range}`
}

window.__getDateStr = getDateString