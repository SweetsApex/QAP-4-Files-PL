const motelCustomer = {
    nameFirst: 'Patrick',
    nameLast: 'Layman',
    birthDate: new Date(2000, 3, 10, 5, 30),
    gender: 'Male',
    roomPreferences: ['2 Queen Beds', 'Ocean View', 'Kitchen', 'Walk-in Shower', 'Closet', 'Top Floor'],
    paymentMethod: 'Mastercard',
    mailAddress: {
        street: '81 Commonwealth Avenue',
        city: 'Mount Pearl',
        prov: 'NL',
        postalCode: 'A1N1W7'
},
    phoneNumber: '709-690-2561',
    checkInDateTime: new Date(2023,7,10,16,0),
    checkOutDateTime: new Date(2023,7,17,10,0),

// Age calculations ://

calculateAge: function() {
    const today = new Date();
    const birthDate = new Date(this.birthDate.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDate());
    const diff = today - birthDate;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
},

// Calculate the total stay duration ://

calculateStayDuration: function() {
    const difference = this.checkOutDateTime - this.checkInDateTime;
    const durationOfDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    return durationOfDays;
},

// Customer Description :// 

generateCustomerDescription: function() {
    const age = this.calculateAge();
    const duration = this.calculateStayDuration();
    return `Name: ${this.nameFirst} ${this.nameLast}\n` +
           `Age: ${age}\n` +
           `Gender: ${this.gender}\n` +
           `Birthday: ${this.birthDate}\n` +
           `Room Preferences: ${this.roomPreferences.join(", ")}\n` +
           `Payment Method: ${this.paymentMethod}\n` +
           `Mailing Address: ${this.mailAddress.street}, ${this.mailAddress.city}, ${this.mailAddress.prov}, ${this.mailAddress.postalCode}\n` +
           `Phone Number: ${this.phoneNumber}\n` +
           `Check-In: ${this.checkInDateTime.toLocaleString()}\n` +
           `Check-Out: ${this.checkOutDateTime.toLocaleString()}\n` +
           `Duration of Stay: ${duration} nights.`;
},
};

// Now Generate the customer description ://

const customerDescription = motelCustomer.generateCustomerDescription();
const shortDate = 'April 10th, 2000'

// Log the customer description to the console ://

console.log(customerDescription);

const html = `

<header><h1>Welcome to QAP #4: JS!</h1></header>
<center>

<br/>
<br/>

<p> 

    Good day Peter! My name is ${motelCustomer.nameFirst} ${motelCustomer.nameLast}, I'm ${motelCustomer.calculateAge()} years old, and I'm a ${motelCustomer.gender}! <br/>
    My birthday is ${shortDate}, my address is Mailing Address: ${motelCustomer.mailAddress.street}, ${motelCustomer.mailAddress.city}, ${motelCustomer.mailAddress.prov}, ${motelCustomer.mailAddress.postalCode}. <br/>
    Personally, my room prerferences are ${motelCustomer.roomPreferences}. My payment preference is ${motelCustomer.paymentMethod}, <br/>
    and my phone number is ${motelCustomer.phoneNumber}. 

    <br/>
    <br/>

</p>

<p>

    The date in which I checked into the hotel was ${motelCustomer.checkInDateTime.toLocaleString()}, and my checkout time was ${motelCustomer.checkOutDateTime.toLocaleString()}. <br/>
    My total duration of stay was ${motelCustomer.calculateStayDuration()} nights!

</p>

</center>
`;

document.body.innerHTML = html;