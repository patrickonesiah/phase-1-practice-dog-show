const url = 'http://localhost:3000/dogs'

const submitButton = (form) => {

    form.addEventListener('click', () => {
        const updatedDog = {
            name: form.name.value,
            breed: form.breed.value,
            sex: form.sex.value
        };

        fetch(`${url}/${form.dogId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDog)
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetch(url)
        .then(resp => resp.json())
        .then(dogArray => {
            displayDogTable(dogArray)
        })
})



const displayDogTable = dogArray => {

    const tableBody = document.querySelector('#table-body')
    const form = document.querySelector('#dog-form')

    dogArray.forEach(dog => {
        const tableRow = document.createElement('tr'),
            dogName = document.createElement('td'),
            dogBreed = document.createElement('td'),
            dogSex = document.createElement('td'),
            editButtonOuter = document.createElement('td'),
            editButton = document.createElement('button')

        dogName.textContent = dog.name
        dogBreed.textContent = dog.breed
        dogSex.textContent = dog.sex
        editButton.textContent = 'Edit Dog'

        editButton.addEventListener('click', () => {
            form.dogId = dog.id
            form.name.value = dog.name
            form.breed.value = dog.breed
            form.sex.value = dog.sex
        })

        tableRow.appendChild(dogName)
        tableRow.appendChild(dogBreed)
        tableRow.appendChild(dogSex)
        editButtonOuter.appendChild(editButton)
        tableRow.appendChild(editButtonOuter)
        tableBody.appendChild(tableRow)
    });
    console.log(Object.keys(form))
    submitButton(form)

}

//What have I learned from this exercise?
//When the user clicks on edit dog, it sets the values in the form to the object's detail
//The id was also passed in that form element object, i believe it created an additional property call dogId in form
//With the dogId, I could use that id to make a Patch to change the detail in db.json