const url = 'http://localhost:3000/dogs'

document.addEventListener('DOMContentLoaded', () => {
    fetch(url)
    .then(resp=>resp.json())
    .then(dogArray=>{
        displayDogTable(dogArray)
        submitButton()
    })
})

const submitButton = () => {
    fetch(`${url}/`,
        )
    .then()
}

const displayDogTable = dogArray => {

    const tableBody = document.querySelector('#table-body')

    dogArray.forEach(dog => {
        const tableRow = document.createElement('tr'),
        dogName = document.createElement('td'),
        dogBreed = document.createElement('td'),
        dogSex = document.createElement('td'),
        dogButtonOuter = document.createElement('td'),
        dogButton = document.createElement('button')

        dogName.innerText = dog.name
        dogBreed.innerText = dog.breed
        dogSex.innerText = dog.sex
        dogButton.innerText = 'Edit Dog'

        dogButton.addEventListener('click',(event)=>{
            const inputElements = document.querySelectorAll('input')
            const test = event.target.parentNode.parentNode.querySelectorAll('td')

            for(let count = 0; count < 3; count++){
                inputElements[count].value = test[count].innerText
                inputElements[count].value = test[count].innerText
                inputElements[count].value = test[count].innerText
            }
        })

        tableRow.appendChild(dogName)
        tableRow.appendChild(dogBreed)
        tableRow.appendChild(dogSex)
        dogButtonOuter.appendChild(dogButton)
        tableRow.appendChild(dogButtonOuter)

        tableBody.appendChild(tableRow)
    });

}

// <form id='dog-form' class="padding margin border-round border-grey">
// <input type="text" name="name" placeholder="dog's name" value="" />
// <input type="text" name="breed" placeholder="dog's breed" value="" />
// <input type="text" name="sex" placeholder="dog's sex" value="" />
// <input type="submit" value="Submit" />
// </form>