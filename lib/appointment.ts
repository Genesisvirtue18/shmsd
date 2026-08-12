type AppointmentTarget = {
  doctor?: string
  speciality?: string
}

export function buildAppointmentHref({ doctor, speciality }: AppointmentTarget) {
  const params = new URLSearchParams()

  if (doctor) params.set('doctor', doctor)
  if (speciality) params.set('speciality', speciality)

  const query = params.toString()

  return query ? `/appointment?${query}` : '/appointment'
}
