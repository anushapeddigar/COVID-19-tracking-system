export class Bed {
  id: number;
  state: string;
  city: string;
  hospital: string;
  pincode: string;
  totalBeds: number;
  availableBeds: number;
  constructor(state: string, city: string, hospital: string, pincode: string,
              totalBeds: number, availableBeds: number) {
    this.state = state;
    this.city = city;
    this.hospital = hospital;
    this.pincode = pincode;
    this.totalBeds = totalBeds;
    this.availableBeds = availableBeds;
  }
}
