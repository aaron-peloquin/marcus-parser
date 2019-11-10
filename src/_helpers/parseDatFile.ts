const getMilesFromString = milesString => +milesString.replace(/[^\d.-]/g, '')
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
    protection_level,
    distanceDrove: -1,
    driverUrl: eventData[(isHost ? 'guest_url' : 'host_url')],
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
