// mock up the labels and input display
// create two buttons to draw and clear your table
// give buttons value property equal to the display
// give buttons and inputs similar class
// grab them to the js file
// create variables that will hold the input values of your labels
// for the number labels change them to numbers using the number constructor or parselnt
// add an event listener of click to your draw button\
// create variables for your rows and columns
// using for loop for your row variable, create tr element
// inside the for loop,create another for loop for the columnn
// inside the for loop for the column, create the td Element
// outside the for loop append your td to your table row
// append your table row to your div or table
// add an event listener of click to the clearButton
// set the divContainer innerHTML to empty string to clear the tableContainer
// mock up the buttons for erase and paint
// set a paint and erase variable to be false
// set an attribute of class to the td iside thw for loop for the Column
// add an event listener of mousedown to the td variable
// using if else statement, set, if erase is true the color should be transparent else the color should be equivalent to the value of the color button
// add an event listener of mouse up to the td variable and set paint to be false
// add an event listener of click to the erase button and set erase to be true
// add an event listener of click to the paint button and set erase to be false



let colorButton = document.getElementById('color')
let drawButton = document.getElementById('draw')
let clearButton = document.getElementById('clear')
let divContainer = document.getElementById('table')
let eraseBtn = document.getElementById('erase');
let paintBtn = document.getElementById('paint')
let cell = ''

erase = false
paint = false

function click(){
    let Row = parseInt(document.getElementById('row').value)
    let Column = parseInt(document.getElementById('column').value)
    let tableContainer = document.createElement('table') 
    
    for(let i=0; i<Row; i++){
        let trow = document.createElement('tr')
        for(let a=0; a<Column; a++){
            let tdata = document.createElement('td')
            // tdata.innerHTML = '  '
            // tdata.style.backgroundColor = 'white'
            // tdata.style.width= '1em'
            // tdata.style.height= '1em'
            // tdata.style.border = '3px solid black'
            // tdata.setAttribute("class", 'tdata');

            tdata.addEventListener('mousedown', () =>{
                paint = true
                if(erase) {
                    tdata.style.backgroundColor = 'transparent'
                }else{
                    tdata.style.backgroundColor = colorButton.value
                }
            })
            tdata.addEventListener('mouseup', () =>{
                paint = false
            })
            console.log("na me")
            trow.appendChild(tdata)
            tableContainer.appendChild(trow)
        }
        divContainer.innerHTML = ""
        divContainer.appendChild(tableContainer)
    }
    console.log(tableContainer)
    // divContainer.appendChild(tableContainer)
}
drawButton.addEventListener('click', click)

clearButton.addEventListener('click', (event) =>{ 
    divContainer.innerHTML = ''
    event.preventDefault()
})

eraseBtn.addEventListener('click', () =>{
    erase = true
})
paintBtn.addEventListener('click', () =>{
    erase = false
})