function confirmaCliente(){
    var confirmaCab = document.getElementById('confirmaCab').innerHTML;
    var cliente = document.getElementById('cliente').value;
    if (confirmaCab.trim() ==="Confirma Dados") {
        document.getElementById('outro').disabled = true
        document.getElementById('cliente').disabled = true
        document.getElementById('boxitens').style.visibility = 'visible'
        document.getElementById('confirmaCab').innerHTML = "Cancelar"
    } else {
        document.getElementById('outro').disabled = false
        document.getElementById('cliente').disabled = false
        document.getElementById('boxitens').style.visibility = 'hidden'
        document.getElementById('confirmaCab').innerHTML = "Confirma Dados"
        document.getElementById('cliente').value = "";
    }
    //dtlcliente.disabled = true
    //document.getElementById("myText").disabled = true;
    //var V_cliente = document.getElementById('dtlcliente').options.namedItem(selector).value;
    //var V_cliente = document.getElementById('dtlcliente').options;
    //console.log(V_cliente)
    console.log(cliente)
    console.log(confirmaCab.trim())
    
}


document.querySelectorAll('a').forEach(link =>{
  const conteudo = document.getElementById('conteudo')
  link.onclick = function(e){
    e.preventDefault()

    
    fetch(link.href)
      .then(resp => resp.text())
      .then(html => conteudo.innerHTML = html)

  }
  //console.log(link)
})
