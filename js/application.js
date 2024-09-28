let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let { name, email, parent, gender, phone, district, dob, address, timing, pincode, language } = form.elements;
    console.log(name, email, parent, gender, phone, district, dob, address, timing, pincode, language);

    let userObj = {
        "id": 0,
        "name": name.value,
        "guardianName": parent.value,
        "email": email.value,
        "dob": dob.value,
        "gender": gender.value,
        "phoneNumber": phone.value,
        "address": address.value,
        "district": district.value,
        "pinCode": pincode.value,
        "typeLanguage": language.value,
        "classTiming": timing.value
    }

    fetch('http://localhost:80/amizhth/studenttable/save', {
        method: "POST",
        body: JSON.stringify(userObj)
    }).then(res => res.json()).then(data => {
        console.log(data);

    })
})