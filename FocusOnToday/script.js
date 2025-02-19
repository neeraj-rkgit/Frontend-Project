const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputField = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progrss-value")

checkBoxList.forEach((checkbox) =>{
    checkbox.addEventListener('click' ,(e) =>{
        const allGoalIsAdded = [...inputField].every(function (input){
            return input.value
        })
        if(allGoalIsAdded){
            checkbox.parentElement.classList.toggle("completed");
            progressValue.computedStyleMap.width = "33.33%";
        } 
    })
})