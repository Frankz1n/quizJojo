import ModalResult from "../ModalResult"

const ResultQuiz = ({ answer }) => {

  let answers = Object.keys(answer)
  let mostChosenQuestion = ''
  let min = 2
  let neutralChoice = 0

  answers.forEach((element) => {
    if (answer[element] >= min) {
      if (min === answer[element]) {
        neutralChoice++
      }
      mostChosenQuestion = element
      min = answer[element]
    }
  })

  let optionFive = neutralChoice >= 2 ? true : false

  return (
    <ModalResult
      mostChosenQuestion={mostChosenQuestion}
      optionFive={optionFive}
    />
  )

}

export default ResultQuiz