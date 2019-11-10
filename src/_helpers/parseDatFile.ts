const getMilesFromString = milesString => +milesString.replace(/[^\d.-]/g, '')
export const parseDatFile = (rawFileData = []) => rawFileData.map(eventData => {
  const {
    reservation_check_in,
    guest_url,
    host_url,
    protection_level,
    reservation_state,
  } = eventData

  console.log('Aaron', eventData)

  const datObject = {
    guest: guest_url,
    host: host_url,
    sketchyData: true,
    distanceDrove: -1,
    currentStart: new Date(reservation_state.trip_start).toLocaleString()
  }

  const start = getMilesFromString(reservation_check_in.owner_check_in_odometer_reading)
  const end = getMilesFromString(reservation_check_in.owner_check_out_odometer_reading)
  if (start && end) {
    if(start < end) { datObject.sketchyData = false }
    datObject.distanceDrove = end - start
  }

  return datObject
})
