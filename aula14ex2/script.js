function tabuada(){
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');
    tab.innerHTML = "";

    if (num.length == 0 ){
        window.alert('Por favor, digite um número.');  
    } else {
        let n = Number(num);
        let c = 1;
        while (c <= 10 ){
            let item = document.createElement('option'); 
            item.text = `${n} x ${c} = ${n * c}`; 
            item.value = `tab${c}`
            tab.appendChild(item);
            c++;
        }
    }
}
