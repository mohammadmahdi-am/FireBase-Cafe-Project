
var db = firebase.firestore();


// db.collection("cafes").get().then(records => {
//     records.forEach(record => {
//         console.log(record.data())
//          let card = 
//         `
//         <li class="item">
//         Name : ${record.data().name}
//         </li>
//         `

//         document.getElementById("cafe-list").innerHTML += card
        
//     });
// })

db.collection("cafes")
    .onSnapshot((docs) => {
        document.getElementById("cafe-list").innerHTML = ""
        

        docs.forEach(record => {
            console.log(record.data())
             let card = 
            `
            <li class="item" data-item-id="${record.id}">
            Name : ${record.data().name}
            <span><button class="delete-btn">Delete</button></span>
            </li>
            `
    
            document.getElementById("cafe-list").innerHTML += card




           let buttons =  document.querySelectorAll(".delete-btn")
           buttons.forEach((btn)=>{

                btn.addEventListener("click",function(e){
                let item_id = e.target.parentNode.parentNode.getAttribute("data-item-id")
                db.collection("cafes").doc(item_id).delete().then(() => {
                    console.log("Document successfully deleted!");
                })
              
            })
           })
           
           
            
        });


    });



document.getElementById("add-cafe-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let cafe_name = document.getElementById("name").value
    console.log(cafe_name)
    db.collection("cafes").add({
        name: cafe_name
        
    })

    document.getElementById("name").value = null
        
    


})




