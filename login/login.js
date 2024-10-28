function login(event){
    event.preventDefault()
    un = document.getElementById('username').value;
    pw = document.getElementById('password').value;
    console.log("here");
    fetch('http://127.0.0.1:3000/user/login',{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({ email:un, password :pw, is_doctor:false }),
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('error');
        }
        return response.json();
    })
    .then(data=>{
        token = data.token;
        
        localStorage.setItem('token',token);

    })
    .catch(err=>{
        alert('Invalid username/password');
    })

    document.getElementById('username').value='';
    document.getElementById('password').value='';
}