function create_report(event){

    event.preventDefault();

    var report_user = document.getElementById('user').value;
    var report_Heading = document.getElementById('heading').value;
    var report_description = document.getElementById('description').value;

    const today = new Date();
    var today_date = today.toDateString();

    pdf_input = document.getElementById('pdf_file');
    pdf_data = pdf_input.files[0];
    // console.log(pdf_data);

    var reader = new FileReader();
    reader.readAsDataURL(pdf_data);

    reader.onload = function(){
        var base64pdf = reader.result;
        const token = localStorage.getItem('token');
        fetch('http://127.0.0.1:3000/report/create',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                user: report_user,
                date: today_date,
                Heading: report_Heading,
                description: report_description,
                assets: [base64pdf,"future use"]
            })
            })
            .then(response=>{
                if(!response.ok){
                    throw new Error('error');
                }
                return response.json();
            })
            .then(()=>{
                alert('report succesfully created');
            })
            .catch(()=>{
                alert('some error occured');
            })
        
    }
}