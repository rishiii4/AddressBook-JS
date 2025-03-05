// UC 1 Contact
class Contact {
    
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName);
        this.lastName = this.validateName(lastName);
        this.address = this.validateAddress(address);
        this.city = this.validateAddress(city);
        this.state = this.validateAddress(state);
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }

    
    // UC 2 Validate Contacts
    validateName(name) {
        let nameRegex = /^[A-Z][a-z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`Invalid name ${name}. It should start from capital letter and must be at least 3 character long`);
        }
        return name;
    }

    // validation function for address
    validateAddress(address) {
        if (address.length < 4) {
            throw new Error(`Invalid address ${address}. Address must have at least more then 4 character`);
        }
        return address;
    }

    // validation function for Zip
    validateZip(zip) {
        let zipRegex = /^[0-9]{6}$/;
        if (!zipRegex.test(zip)) {
            throw new Error(`Invalid zip ${zip}. It should contains 6 digits`);
        }
        return zip;
    }

    // validation function for phone
    validatePhone(phoneNumber) {
        let phoneRegex = /^[0-9]{10}/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error(`Invalid phoneNumber ${phoneNumber}. It should contains 10 digits`);
        }
        return phoneNumber;
    }

    // validation function for email
    validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid Email: ${email}. It should be a valid email format.`);
        }
        return email;
    }
}

// UC 4 Function to find and edit a contact
function editContact(firstName, lastName, newDetails) {
    let contact = addressBook.find(c => c.firstName === firstName && c.lastName === lastName);
    
    if (contact) {
        // new details is an object
        Object.assign(contact, newDetails);
        console.log("Contact updated successfully:", contact.toString());
    } else {
        console.log("Contact not found.");
    }
}

// UC 5 function to delete an existing contact
function deleteContact(firstName, lastName) {
    let index = addressBook.findIndex(c => c.firstName === firstName && c.lastName === lastName);
    let contact = addressBook[index];
    if (index !== -1) {
        addressBook.splice(index, 1);
        console.log(`Contact deleted successfully :`, contact.toString());
    } else {
        console.log("Contact not found.");
    }
}

// UC 6 function to find number of contact
let getContactCount = ()=> {return addressBook.reduce(count => count + 1, 0)};

// UC3 Creating a Contact and storing it in an array
let addressBook = [];

let contact1 = new Contact("Arpit", "Gourr", "123 Sector", "Bhopal", "MadhyaPradesh", "100991", "1234567890", "arpit.gourr@example.com");
addressBook.push(contact1);

let contact2 = new Contact("Mohit", "Bairagi", "420 Sector", "Bhopal", "MadhyaPradesh", "100991", "1239877890", "mohit.bairagi@example.com");
addressBook.push(contact2);

let contact3 = new Contact("Mohit", "Bairagi", "420 Sector", "Bhopal", "MadhyaPradesh", "100991", "1239877890", "mohit.bairagi@example.com");
addressBook.push(contact2);

// Editing the contact 2
editContact("Mohit", "Bairagi", {city: "Arjun Nagar"})

// Deleting the contact1
deleteContact("Arpit", "Gourr");

// Displaying all contacts
addressBook.forEach(contact => console.log(contact.toString()));

// Finding total contacts
console.log(getContactCount());
