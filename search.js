
const jobTypes = ['developer','admin','testing','hr','operations','devops'];
const locations = ['bangalore','chennai','hyderabad','pune','delchi'];

const employees = [
    {
        name:'sateesh',
        job:'developer',
        location:'bangalore'
    },
    {
        name:'vikas',
        job:'developer',
        location:'bangalore'
    },
    {
        name:'sahil',
        job:'admin',
        location:'chennai'
    },
    {
        name:'Rahul',
        job:'admin',
        location:'chennai'
    },
    {
        name:'pratap',
        job:'testing',
        location:'hyderabad'
    },
    {
        name:'David',
        job:'testing',
        location:'hyderabad'
    },
]

var btn = document.getElementById("btn");

document.addEventListener("DOMContentLoaded",function(event){
    var jobType = document.getElementById("jobType");
    var location = document.getElementById("location");
    for(var i = 0; i < jobTypes.length; i++)
    {
        var option = document.createElement("option"),
            txt = document.createTextNode(jobTypes[i]);
        option.appendChild(txt);
        option.setAttribute("value",jobTypes[i]);
        jobType.insertBefore(option,jobType.lastChild);
    }


    for(var i = 0; i < locations.length; i++)
    {
        var option = document.createElement("option"),
            txt = document.createTextNode(locations[i]);
        option.appendChild(txt);
        option.setAttribute("value",locations[i]);
        location.insertBefore(option,location.lastChild);
    }

    var c = document.getElementById('c');

    var output = "";
    for(var i = 0; i < employees.length; i++) {
        output += `
        <div class="card-group">
        <div class="card">
            
            <div class="card-body">
            <h5 class="card-title">${employees[i].name}</h5>
            <p class="card-text">${employees[i].job}</p>
            <p class="card-text">${employees[i].location}</p>
            </div>
            </div>
        </div>
        <br/>
        <br/>
        `;
    }
    c.innerHTML = output;
});

function applyChanges(){

    var jobType = document.getElementById("jobType");
    var locationType = document.getElementById("location");
    var job = jobType.value;
    var location = locationType.value;
    console.log('values');
    console.log(job,location)
 
    let latesEmployees = [];
     latesEmployees = employees.filter((employee)=>{
        if( (employee.job ===job) || (employee.location ===location) ){
            return employee;
        }
    });

    console.log(latesEmployees);



    var c = document.getElementById('c');

    var output = "";
    for(var i = 0; i < latesEmployees.length; i++) {
        output += `
        <div class="card-group">
        <div class="card">
            
            <div class="card-body">
            <h5 class="card-title">${employees[i].name}</h5>
            <p class="card-text">${employees[i].job}</p>
            <p class="card-text">${employees[i].location}</p>
            </div>
            </div>
        </div>
        <br/>
        <br/>
        `;
    }
    c.innerHTML = output;
    
}

