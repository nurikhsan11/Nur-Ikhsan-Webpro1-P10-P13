// menangkap elemen a menggunakan looping

document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click',(element) => {
       computerChoice(element);
       console.log(element)
    })
})

function computerChoice(element){
    //menangkap pilihan user
    let pilihanUser = element.target.innerText;
    
    //menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector("#result");

    //membuat pilihan untuk komputer
    let choices = ['Rock','Paper','Scissors'];

    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //jika user yang menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('You Win'),100);
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('You Win'),100);
    }

    if(pilihanUser == 'Scissor'&& pilihanKomputer == 'Paper'){
        setTimeout(alert('You Win'),100)
    }

    // jika komputer yang menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('Komputer Win'),100);
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('komputer Win'),100);
    }

    if(pilihanUser == 'Scissor'&& pilihanKomputer == 'Paper'){
        setTimeout(alert('komputer Win'),100)
    }

    //jika draw atau seri
    if(pilihanUser == pilihanKomputer){
        setTimeout(alert('Draw'),100)
    }
}



