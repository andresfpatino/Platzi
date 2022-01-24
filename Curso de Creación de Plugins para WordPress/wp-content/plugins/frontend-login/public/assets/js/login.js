window.addEventListener("DOMContentLoaded",function(){

    let $form = document.querySelector("#signin");
    let $msg = document.querySelector(".msgmsg");

    $form.addEventListener("submit",function(e){
        e.preventDefault();

        let datos = new FormData($form);
        let datosParse = new URLSearchParams(datos);

        fetch("http://yardsales.plz/wp-json/plz/login",{
            method: "POST",
            body: datosParse
        }
        )
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            $msg.innerHTML = json?.msg;
        })
        .catch(err=>{
            console.log(`Hay un error: ${err}`)
        })

    })
    
})