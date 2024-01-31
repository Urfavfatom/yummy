/// <reference types="./@types/jquery" />

let test = document.getElementById("icon")

$('#icon').on('click',function(){
    $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
})


$('#icon').on('click',function(){
    test.classList.toggle("fa-x")
})
$(function(){
    $('.loader').fadeOut(1500,function(){

            $("body").css('overflow' ,'auto');
            $(".loading").remove()
    })
})

let data= [];
 async function getmeals(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
   let finalResponse = await response.json()
    data = finalResponse.meals
   console.log(data) 
   displayMeals(data)
   
}
getmeals()

function displayMeals(kar) {
    let cartona = "";

    for (let i = 0; i < data.length; i++) {
        cartona += `
        
        
        <div class="col-md-3">
                <div onclick="getMealDetails('${data[i].idMeal}')" class="position-relative perant overflow-hidden rounded-2 ">
                    <div class="image">
                        <img src="${data[i].strMealThumb}" class="img-fluid imgcit" alt="">
                    </div>
                    <div class="contant">
                        <h3 class="layer ps-2 d-flex align-items-center">${data[i].strMeal}</h3>
                    </div>
                </div>

        </div>
        `
    }

    document.getElementById("homeData").innerHTML= cartona
}
async function getMealDetails(mealID) {
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    displayMealDetails(respone.meals[0])


}
function displayMealDetails(meal) {
    let cartona = `
            <div class="col-md-4 text-white">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder text-white">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder text-white">Category : </span>${meal.strCategory}</h3>

                <h3 class="mt-5">Tags :</h3>
                <span>${meal.strTags}</span>
                

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

            document.getElementById("homeData").innerHTML= cartona
}

let arr=[];
let list2 = document.querySelector('.test2')
list2.addEventListener('click',function(){
        $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
        test.classList.toggle("fa-x")
        
    getCategory()
 })
async function getCategory(){
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let categoryData= await category.json()
    arr=categoryData.categories
    console.log(arr)
    displayCategory()
}
function displayCategory() {
    let cartona = "";

    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-3">
                <div onclick="getCategory('${arr[i].idCategory}')" class="position-relative  perant overflow-hidden">
                   <div>
                       <img src="${arr[i].strCategoryThumb}" class="img-fluid imgcit " alt="">

                    </div>

                
                    <div class="layer">
                       <h3 class=" d-flex justify-content-center pt-3">${arr[i].strCategory}</h3>
                       <p class=" text-center">${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
                    </div>
                </div>

            </div>


        `
    }

    document.getElementById("homeData").innerHTML= cartona
}

let area=[];

let list3 = document.querySelector('.test3')
list3.addEventListener('click',function(){
    $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
    test.classList.toggle("fa-x")
    getArea()
})
async function getArea(){
    let responeArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaData= await responeArea.json()
    area=areaData.meals
    console.log(area)
    displayArea()
}

function displayArea() {
    let cartona = "";

    for (let i = 0; i < area.length; i++) {
        cartona += `
        <div class="col-md-3">
                <div onclick="getArea('${area[i].idArea}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                        <h3 class="text-white">${area[i].strArea}</h3>
                </div>
        </div>
        `
    }

    document.getElementById("homeData").innerHTML= cartona
}
let Ingre=[];

let list4 = document.querySelector('.test4')
list4.addEventListener('click',function(){
     $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
        test.classList.toggle("fa-x")
    getIngredients()
})
async function getIngredients(){
    let responeIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let IngredientsData= await responeIngredients.json()
    Ingre = IngredientsData.meals.slice(0, 20);
    console.log(IngredientsData.meals);
    displayIngredients();
}
function displayIngredients() {
    let cartona = "";

    for (let i = 0; i < Ingre.length; i++) {
        cartona += `
        <div class="col-md-3 text-white">
                <div onclick="getIngredients('${Ingre[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${Ingre[i].strIngredient}</h3>
                    <p>${Ingre[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>
        `
    }
    document.getElementById("homeData").innerHTML= cartona
}
let list5 = document.querySelector('.test5')
list5.addEventListener('click',function(){
     $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
        test.classList.toggle("fa-x")
        showContacts()
})
function showContacts() {
    homeData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
               <input type="text" class="form-control" placeholder="Enter Your Name">
            </div>
            <div class="col-md-6">
               <input type="email" class="form-control " placeholder="Enter Your Email">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control " placeholder="Enter Your Phone">
               
            </div>
            <div class="col-md-6">
                 <input type="number" class="form-control " placeholder="Enter Your Age">
                
            </div>
            <div class="col-md-6">
                <input type="password" class="form-control " placeholder="Enter Your Password">
                
            </div>
            <div class="col-md-6">
                <input type="password" class="form-control " placeholder="Repassword">
                
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
}
let list1 = document.querySelector('.test1')
list1.addEventListener('click',function(){
     $('.sidebar').animate({width:'toggle', padding_inline:('toggle')} , 500)
        test.classList.toggle("fa-x")
        showSearch()
})
async function showSearch(){
    let cartona = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`
    document.getElementById("homeData").innerHTML=cartona
}