export class Patient {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    mobile: number;
    email: string;
    address: string;
    city: string;
    zipcode: number;
    associatedBed: string;
    constructor(firstName: string,
                lastName: string,
                dob: string,
                mobile: number,
                email: string,
                address: string,
                city: string,
                zipcode: number) {
      this.firstName = firstName;
      this.city = city;
      this.lastName = lastName;
      this.dob = dob;
      this.mobile = mobile;
      this.email = email;
      this.address = address;
      this.zipcode = zipcode;
      this.associatedBed = '0';
    }
}
