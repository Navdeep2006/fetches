function user_create(event){
    event.preventDefault();
    const form = document.getElementById('userForm');
    if (!form.checkValidity()) {
        
        form.reportValidity(); 
        return;
    }
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        DOB: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        is_doctor: true
    }

    console.log(userData);
    fetch('http://127.0.0.1:3000/user/create',{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            DOB: document.getElementById("dob").value,
            address: document.getElementById("address").value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            is_doctor: true
        })    
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('error');
        }
        return response.json();
    })
    .then(()=>{
        alert('user succesfully created');
    })
    .catch(()=>{
        alert('user already exist');
    })
    
}