let carObject = {
    vahicle: "bike",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

    farePerkilo: 1,
    capacity: 2,
    descriotion: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"

}
let BusObject = {
    vahicle: "Bus",
    imageUrl: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerkilo: 3,
    capacity: 40,
    descriotion: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"

}

function displayService(service) {

    //     Dynamic korte 4 steps 
    // 1 access the main section by id
    // 2.create div element
    //3 create innerHtml of avode div dinamacally with service
    // 3 append the div to main section

    const mainSection = document.getElementById("main-section");
    const stringified = JSON.stringify(service);
    const div = document.createElement("div");

    div.innerHTML = `
    <main id="main-section">
        <div class="card mb-3 mt-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${service.imageUrl} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${service.vahicle}</h5>
                        <p class="card-text"></p>
                        <p class="card-text">${service.descriotion}<small class="text-muted">Last updated 3 mins ago</small></p>
                        <h5 class="card-title"><small>fareperkilo</small> ${service.farePerkilo}<small> capasity</small> ${service.capacity}</h5>

                        <!---button --->
                        <button type="button" class="btn btn-primary" data-toggle="modal" onclick='handleBooking(${stringified})' data-target="#exampleModal">
                        Launch demo modal
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    `
    mainSection.appendChild(div)


}
displayService(carObject);
displayService(BusObject);

function handleBooking(obj) {
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
  <img class="card-img-top" src="${obj.imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">vehical Mood :${obj.vahicle}</h5>
    <p class="card-text">${obj.descriotion}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}