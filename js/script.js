
listElement =document.querySelector('.launch_items');
const postList = document.querySelector('ul');
const postTemplate = document.getElementById('single_post');
let allButton =document.querySelectorAll(".launch_year button");
// console.log(AllButton);
function CheckError(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
    
}
fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(CheckError)
    .then(data=> {
    getLaunchProgram(data);
})
.catch(error =>{
alert(error);
});


function getLaunchProgram(listOfLunches) {
    for(const launch of listOfLunches) {
        const postE1 =document.importNode(postTemplate.content, true);
        postE1.querySelector('img.launch_image').setAttribute('src',launch.links.mission_patch);
        postE1.querySelector('.mission_id').textContent = launch.mission_id;
        postE1.querySelector('.launch_year_desc').textContent = launch.launch_year;
        // postE1.querySelector('.successful_launch').textContent = launch.launch_success;
        // postE1.querySelector('.succesful_landing').textContent = launch.rocket.cores.land_success;
        listElement.append(postE1);
    }
}

for(let i=0; i<allButton.length; i++){
    allButton[i].addEventListener('click', function(element){
        // alert(allButton[i]);
    
    });
}
