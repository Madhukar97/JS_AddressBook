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
    this.setfirstName(firstName);
    this.setlastName(lastName);
    this.setaddress(address);
    this.setcity(city);
    this.setstate(state);
    this.setzip(zip);
    this.setphone(phone);
    this.setemail(email);
  }

  getfirstName() {
    return this.firstName;
  }
  setfirstName(firstName) {
    let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (firstNameRegex.test(firstName))
      this.firstName = firstName;
    else throw '\nfirstName is incorrect\n';
  }
  getlastName() {
    return this.lastName;
  }
  setlastName(lastName) {
    let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (lastNameRegex.test(lastName))
      this.lastName = lastName;
    else throw '\nlastName is incorrect\n';
  }
  getaddress() {
    return this.address;
  }
  setaddress(address) {
    let addressRegex = RegExp('^[A-Za-z0-9+-_]{4,}$');
    if (addressRegex.test(address))
      this.address = address;
    else throw '\naddress is incorrect\n';
  }
  getcity() {
    return this.city;
  }
  setcity(city) {
    let cityRegex = RegExp('^[A-Za-z]{4,}$');
    if (cityRegex.test(city))
      this.city = city;
    else throw '\ncity is incorrect\n';
  }
  getstate() {
    return this.state;
  }
  setstate(state) {
    let stateRegex = RegExp('^[A-Za-z]{4,}$');
    if (stateRegex.test(state))
      this.state = state;
    else throw '\nstate is incorrect\n';
  }
  getzip() {
    return this.zip;
  }
  setzip(zip) {
    let zipRegex = RegExp('^[1-9][0-9]{5}$');
    if (zipRegex.test(zip))
      this.zip = zip;
    else throw '\nzip is incorrect\n';
  }
  getphone() {
    return this.phone;
  }
  setphone(phone) {
    let phoneRegex = RegExp('^[1-9][0-9]{9}$');
    if (phoneRegex.test(phone))
      this.phone = phone;
    else throw '\nphone is incorrect\n';
  }
  getemail() {
    return this.email;
  }
  setemail(email) {
    let emailRegex = RegExp('^(?!.*@.*@)[a-z+_-]+(.[a-z0-9])*@[a-z0-9]+(.[a-z])*.[a-z]{2,}$');
    if (emailRegex.test(email))
      this.email = email;
    else throw '\nemail is incorrect\n';
  }

  toString() {
    return 'firstName= ' + this.firstName +
      ', lastName = ' + this.lastName +
      ', address = ' + this.address +
      ', city = ' + this.city +
      ', state = ' + this.state +
      ', zip = ' + this.zip +
      ', phone = ' + this.phone +
      ', email = ' + this.email;
  }

}

let contact1 = new Contact('Madhukar', 'Tatiraju', 'someAddress', 'vizag', 'Andhra', '530013', '9344046505', 'madhukar@gmail.com');
console.log(contact1);