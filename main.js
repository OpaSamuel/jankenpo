let papelbut= document.getElementById('papel')
let pedrabut = document.getElementById('pedra')
let tesourabut=document.getElementById('tesoura')
let res = document.getElementById('res')
let opcao = ['Pedra','Papel','Tesoura']
let escolhaPc=Math.floor(Math.random()*3)

let tenteNovamente =document.createElement('button')
tenteNovamente.setAttribute('id','tryAgain')
tenteNovamente.textContent='Tente Novamente'

function sePedra(opc){
    opc='Pedra'
    if(escolhaPc ===0){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
         escolheu ${opcao[0]} Também <br> <strong>Deu empate!!</strong></p>`
    }
    else if(escolhaPc ===1){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
         escolheu ${opcao[1]} <br> <strong>Você Perdeu!!</strong>`
    }
    else{
        res.innerHTML=`<p>
            Você escolheu ${opc} e o Computador
            escolheu ${opcao[2]} <br> <strong>Você Venceu!!</strong>
        </p>`
    }
    res.appendChild(tenteNovamente)
}
function sePapel(opc){
    opc='Papel'
    if(escolhaPc===0){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
        escolheu ${opcao[0]} <br><strong>Você Venceu!!</strong></p>`
    }
    else if(escolhaPc === 1){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
        escolheu ${opcao[1]} Também<br> <strong>Deu Empate!!</strong></p>`
    }
    else{
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
        escolheu ${opcao[2]} <br> <strong>Você Perdeu!!</strong></p>`
    }
    res.appendChild(tenteNovamente)
}

function seTesoura(opc){
    opc ='Tesoura'
    if(escolhaPc ===0){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
        escolheu ${opcao[0]} <br> <strong>Você Perdeu!!</strong></p>`
    }
    else if(escolhaPc===1){
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
        escolheu ${opcao[1]} <br> <strong>Você Venceu!!</strong></p>`
    }
    else{
        res.innerHTML=`<p>Você escolheu ${opc} e o Computador
            escolheu ${opcao[2]} Também <br> <strong>Deu Empate!!</strong></p>`
        }
        res.appendChild(tenteNovamente)
}

tenteNovamente.addEventListener('click',function tryAgain(){
    location.reload()
})

function pedra(){
 sePedra()
}
function papel(){
    sePapel()
}
function tesoura(){
    seTesoura()
}
