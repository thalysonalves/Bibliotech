const btnMainContent = document.querySelectorAll(".btnMain")

btnMainContent.forEach(btnMainContent =>{
    btnMainContent.addEventListener("click", function(event){
        switch(event.target.id){
            case 'btnMain1':
                console.log("oi")
            break;
            default:
                alert("jaslkdjaklwsi")
            break;
            }
    })
})

