const change= document.getElementById("change")

function change_data(){

    if (document.getElementsByTagName ('div') [3].innerHTML===' Nikolaeva '){
        document.getElementsByTagName ('div') [3].innerHTML=' Николаева '
        document.getElementsByTagName ('div') [4].innerHTML=' Владислава '
        document.getElementsByTagName ('div') [5].innerHTML=' Вадимовна  '
        return
    }

    if (document.getElementsByTagName ('div') [3].innerHTML===' Николаева '){
        document.getElementsByTagName ('div') [3].innerHTML=' Nikolaeva '
        document.getElementsByTagName ('div') [4].innerHTML=' Vladislava '
        document.getElementsByTagName ('div') [5].innerHTML=' Vadimovna '
        return
    }
}

change.addEventListener ("click", change_data)





