const addSkillButton = document.querySelector('button')
const skillList = document.querySelector('ul')

addSkillButton.addEventListener('click', function (event) {
    console.log(event.target)
    const listEl = document.createElement('li')
    const inputEl = document.querySelector('input')
    //add code so that if no text, doesn't add anything
    if (inputEl !== '') {
        listEl.innerText = inputEl.value
        console.log(listEl)
        skillList.appendChild(listEl)
        inputEl.value = "type skills here"
    }
})