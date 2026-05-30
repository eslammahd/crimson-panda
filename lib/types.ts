export interface Slot {
  id: string;
  date: string;
  time: string;
  duration: number;
  is_booked: boolean;
  created_at: string;
}

export interface Booking {
  id: string;
  slot_id: string;
  patient_name: string;
  phone: string;
  notes: string | null;
  created_at: string;
  slots?: Slot;
}
