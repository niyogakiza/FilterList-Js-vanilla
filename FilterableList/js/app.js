
let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //Get the value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //Get names ul

    let names = document.getElementById('names');

    //Get items

    let ul = document.getElementById('names');

    // get list

    let li = ul.querySelectorAll('li.collection-item');

    // loop through collection items lis

    for( let i = 0; i < li.length; i++){

        let a = li[i].getElementsByTagName('a')[0];

        // if matched

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
}
