const storyParts = [
    "Humphrey by Lucille Roh",
    "There were four animals named Humphrey, Dumphrey, Pumphrey, Numphrey.",
    "Humphrey wanted to eat Dumphrey and Dumphrey wanted to eat Pumphrey...",
    "Pumphrey wanted to eat Numphrey, and Numphrey wanted to eat ALL OF THEM!",
    "No one ate anyone, but Humphrey ate vegetables.",
    "Then the four of them met a droid named R2-D2",
    "R2-D2 was only friends with Humphrey.",
    "Humphrey was also friends with C-3PO.",
    "They all played until it was bed time.",
    "I am going to sleep in your bed Umma and Appa",
    "The End"
]

let index = 0

const storyElement = document.querySelector('.storyContent')

storyElement.innerHTML = storyParts[0]

const nextPageButton = document.querySelector('.nextButton')
nextPageButton.addEventListener('click', () => {
    if (index >= storyParts.length - 1) {
        index = 0
    } else {
        index += 1
    }
    storyElement.innerHTML = storyParts[index]
    console.log(index)
})
