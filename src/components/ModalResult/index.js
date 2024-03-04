import ShowStandResult from "../ShowStandResult"

const ModalResult = ({ optionFive, mostChosenQuestion }) => {
  let title = ''
  let img = ''
  let alt = ''
  let description = ''

  if (optionFive) {
    title = 'Sticky Fingers'
    img = '/imgs/stands/sticky fingers.jpg'
    alt = 'Ilustração do stand Sticky Fingers: um personagem de coloração azul e branca.'
    description = 'Assim como Bruno Bucciarati, você demonstra uma inteligência estratégica e uma habilidade excepcional de se adaptar às situações. Seu modo de agir reflete a sua própria adaptabilidade, sendo capaz de abrir novos caminhos, superar obstáculos e enfrentar desafios de maneira única.'

  } else if (mostChosenQuestion === 'optionOne') {
    title = 'Star Platinum'
    img = '/imgs/stands/star platinum.jpg'
    alt = 'Ilustração do stand Star Platinum: um personagem prateado com cabelos escuros.'
    description = 'Sua coragem, determinação e prontidão para enfrentar desafios destacam você como alguém digno do stand Star Platinum!. Assim como Jotaro Kujo, você emana uma energia imparável, capaz de superar obstáculos com força, velocidade e precisão notáveis.'

  } else if (mostChosenQuestion === 'optionTwo') {
    title = 'The World'
    img = '/imgs/stands/the world.jpg'
    alt = 'Ilustração do stand The World: um personagem dourado.'
    description = 'Assim como Dio Brando, você possui uma presença magnética e uma incrível determinação. The World é um reflexo da força interior e da capacidade de influenciar o curso dos eventos, permitindo que você analise, planeje e aja com precisão em meio ao caos. '
  }

  return (
    <ShowStandResult
      title={title}
      img={img}
      alt={alt}
      description={description}
    />
  )
}

export default ModalResult