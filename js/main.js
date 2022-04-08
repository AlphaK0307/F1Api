// Set the navbark to dark by replacing the word light with dark in className
let body = document.body;
let children = body.children;
let navBar = children[0];
navBar.className = navBar.className.replaceAll('light', 'dark');

// Set the buttons to be bootstrap style with colors
let myButtonColors = ['primary', 'secondary', 'success', 'danger', 'info']

let myButtons = document.querySelectorAll('.col-2 > button')

// Loop through buttons and apply class name
for (let i = 0; i < myButtons.length; i++){
    myButtons[i].className = `btn btn-${myButtonColors[i]} w-100`
}

// Add a header under the buttons in the container
// First create the header
let newHeader = document.createElement('h4');
newHeader.id = 'myHeader';
newHeader.className = 'text-center mt-3';
newHeader.innerHTML = '    ';

// Get the row of buttons
let buttonRow = document.getElementsByClassName('row')[0];
// Add the new header after the button row
buttonRow.after(newHeader);




// Create a new scope
{
    // Get the header
    let myHeader = document.getElementById('myHeader');
    console.log(myHeader);

    // Create a function to execute when the event is triggered
    function handleHeaderEvent(e){
        let elementToChange = e.target;
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'purple';
        } else {
            elementToChange.style.color = 'black';
        }
    }

    // Add event listener
    myHeader.addEventListener('click', handleHeaderEvent);

}
// Event Listeners for the buttons
{
    let ourColorButtons = document.querySelectorAll('.col-2 > button');
    
    let myButtonColors = ['primary', 'secondary', 'success', 'danger', 'info'];

    for (let i=0; i < ourColorButtons.length; i++){
        button = ourColorButtons[i];
        button.addEventListener('click', (e) => {
            let body = document.body;
            body.className = `bg-${myButtonColors[i]}`
        })
    }
}


//F1 Data fetching

function getData(){
    //console.log("Hello")
let season=document.querySelector("#season").value;
let round= document.querySelector("#round").value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(racerdata => {
        console.log(racerdata)
        for(let i=0;i<7;i++){
            //Driver Data
            let f_name=racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
            let l_name=racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
            // fullname
            let Name=`${f_name} ${l_name}`

            document.querySelector(`#name-${i}`).innerHTML=Name

            //Nationality Data

            let n= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
            console.log(n)           

            document.querySelector(`#nationality-${i}`).innerHTML=n

            //Points Data
            let p= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
            console.log(p)           

            document.querySelector(`#points-${i}`).innerHTML=p
        }
    })
    
}