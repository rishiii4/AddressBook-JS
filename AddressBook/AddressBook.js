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

// Creating a Contact and storing it in an array
let addressBook = [];

let contact1 = new Contact("Arpit", "Gourr", "123 Sector", "Bhopal", "MadhyaPradesh", "100991", "1234567890", "arpit.gourr@example.com");
addressBook.push(contact1);

// Displaying all contacts
addressBook.forEach(contact => console.log(contact.toString()));
