
function makegrid(size){
    if (size<50){
    let board=document.getElementById('board')
    for(i=0;i<size;i++){
    let row=document.createElement('div')
    row.classList.add('row')
    row.style.backgroundColor='white'
    row.style.display='flex'
    row.style.flexDirection='column'
    row.style.gap='1px'
    row.style.flex='1'
    for(j=0;j<size;j++){
        let column=document.createElement('div')
        column.classList.add('column')
        row.appendChild(column)
        column.style.backgroundColor='white'
        column.addEventListener('mouseover',function(){column.style.backgroundColor='black'})
        column.style.flex='1'
        column.style.border='1px solid grey'
    }
    board.appendChild(row);
}
    }else {alert('Choose a value less than 50 please')}
}
function deletesquares(){
    let board=document.getElementById('board')  
while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);}
}
function getnumbe(){
    deletesquares()
    let size=+prompt('what size do you want?')
    makegrid(size);

}