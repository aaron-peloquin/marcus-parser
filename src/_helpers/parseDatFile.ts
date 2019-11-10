const getMilesFromString = milesString => +milesString.replace(/[^\d.-]/g, '')

const hashCode = s => {
  for(var i = 0, h = 0; i < s.length; i++)
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return h;
}

export const parseDatFile = (rawFileData = [], isHost=true) => rawFileData.map(eventData => {
  if (!isHost) {
    eventData = eventData.current
  }
  const {
    reservation_check_in,
    protection_level = 'Not Found',
    reservation_state = {},
    invoices: { current = [] } = {},
    reservation_url,
  } = eventData || {}

  const eventDate = new Date(reservation_state.trip_start)
  const datObject = {
    currentStartDate: eventDate.toLocaleString(),
    bigMoney: current,
    distanceDrove: -1,
    driverUrl: eventData[(isHost ? 'guest_url' : 'host_url')],
    id: hashCode(reservation_url),
    protection_level,
    reservationUrl: reservation_url,
    sketchyData: true,
    timestamp: eventDate.valueOf(),
  }

  const start = getMilesFromString(reservation_check_in.owner_check_in_odometer_reading)
  const end = getMilesFromString(reservation_check_in.owner_check_out_odometer_reading)
  if (start && end) {
    if(start < end) { datObject.sketchyData = false }
    datObject.distanceDrove = end - start
  }

  return datObject
})
