document.addEventListener('DOMContentLoaded', () => {
  const mainDiv = document.querySelector('.grid')

  for (let i = 0; i < 225; i++) {
    const subDiv = document.createElement('div')
    mainDiv.appendChild(subDiv)
  }

  const squares = document.querySelectorAll('.grid div')
  const resultDisplay = document.querySelector('result')
  let width = 15
  let currentShooterIndex = 202
  let currentInvaderIndex = 0
  let alienInvadersTakenDown = []
  let result = 0
  let direction = 1
  let invaderId

  // define the alien invaders
  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
  ]

  // draw the alien invaders
  alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))
})