import ShowStandResult from "../ShowStandResult"

const ModalResult = ({ optionFive, mostChosenQuestion }) => {

  const functionResult = (optionFive, mostChosenQuestion) => {
    if (optionFive) {
      return {
        title: 'Sticky Fingers',
        img: '/imgs/stands/sticky fingers.gif',
        alt: 'Ilustração do stand Sticky Fingers: um personagem de coloração azul e branca.',
        description: 'Você demonstra uma inteligência estratégica e uma habilidade excepcional de se adaptar às situações. Seu modo de agir reflete a sua própria adaptabilidade, sendo capaz de abrir novos caminhos, superar obstáculos e enfrentar desafios de maneira única.'
      }
    }
    if (mostChosenQuestion === 'optionOne') {
      return {
        title: 'Star Platinum',
        img: '/imgs/stands/star platinum.gif',
        alt: 'Ilustração do stand Star Platinum: um personagem prateado com cabelos escuros.',
        description: 'Sua coragem, determinação e prontidão para enfrentar desafios destacam você como alguém digno do stand Star Platinum!. Você emana uma energia imparável, capaz de superar obstáculos com força, velocidade e precisão notáveis.',
      }
    }
    if (mostChosenQuestion === 'optionTwo') {
      return {
        title: 'The World',
        img: '/imgs/stands/the world.gif',
        alt: 'Ilustração do stand The World: um personagem dourado.',
        description: 'Você possui uma presença magnética e uma incrível determinação. The World é um reflexo da força interior e da capacidade de influenciar o curso dos eventos, permitindo que você analise, planeje e aja com precisão em meio ao caos.',
      }
    }
    if (mostChosenQuestion === 'optionThree') {
      return {
        title: 'Gold Experience',
        img: '/imgs/stands/gold experience.gif',
        alt: 'Ilustração do stand Gold Experience: um personagem dourado.',
        description: 'Você emana vitalidade e a capacidade única de transformar situações adversas em oportunidades florescentes. Sua presença é um catalisador para o crescimento e a renovação, permitindo que você encontre beleza e significado mesmo nas circunstâncias mais desafiadoras.',
      }
    }
    if (mostChosenQuestion === 'optionFour') {
      return {
        title: 'Silver Chariot',
        img: '/imgs/stands/silver chariot.gif',
        alt: 'Ilustração do stand Silver Chariot: um personagem prateado, portando uma espada.',
        description: 'Seu Stand é uma extensão de sua agilidade mental e física, capaz de realizar movimentos rápidos e estratégicos. Silver Chariot reflete a destreza e a astúcia que você traz para o cenário desafiador à sua frente.',
      }
    }
  }
  
  const result = functionResult(optionFive, mostChosenQuestion)

  return (
    <ShowStandResult
      title={result.title}
      img={result.img}
      alt={result.alt}
      description={result.description}
    />
  )
}

export default ModalResult