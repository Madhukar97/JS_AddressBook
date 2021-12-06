class Contact {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phone;
  email;

  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }

  getfirstName() {
      return this.firstName;
  }
  setfirstName(firstName){
      this.firstName=firstName;
  }
  getlastName() {
      return this.lastName;
  }
  setlastName(lastName){
      this.lastName=lastName;
  }
  getaddress() {
      return this.address;
  }
  setaddress(address){
      this.address=address;
  }
  getcity() {
      return this.city;
  }
  setcity(city){
      this.city=city;
  }
  getstate() {
      return this.state;
  }
  setstate(state){
      this.state=state;
  }
  getzip() {
      return this.zip;
  }
  setzip(zip){
      this.zip=zip;
  }
  getphone() {
      return this.phone;
  }
  setphone(phone){
      this.phone=phone;
  }
  getemail() {
      return this.email;
  }
  setemail(email){
      this.email=email;
  }

  toString() {
    return 'firstName= ' + this.firstName +
      ', lastName = ' + this.lastName +
      ', address = ' + this.address +
      ', city = ' + this.city + 
      ', state = ' + this.state +
      ', zip = ' + this.zip + 
      ', phone = ' + this.phone +
      ', email = ' + this.email ;
  }

}

let contact1 = new Contact('Madhukar', 'Tatiraju', 'someAddress', 'vizag', 'AP', '530013', '9344046505', 'madhukar@gmail.com');
console.log(contact1);