export const openModal = (deck) => {
  console.log("Action Open Modal", deck)
  return{
    type:"OPEN_MODAL",
    deck
  }
}
