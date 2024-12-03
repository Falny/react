import React from 'react'
import './style/style.css'
import { Question } from './components/question';
import { Result } from './components/result';

const quiz = [
  {
    question: 'Кто самый сильный воин в индийской философии?',
    answer: ['Аржун', 'Мегет', 'Кришна'],
    correct: 0,
  },
  {
    question: 'Кто создатель Рика и Морти?',
    answer: ['Франклин Марс', 'Джастин Ройланд, Дэн Хармон', ' Фред Хой, Уильям А. Фаулер'],
    correct: 1,
  },
  {
    question: 'Чья биография сыграла ключевую роль в сохранении писаний Аристотеля?',
    answer: ['Платона', 'Апелликона Теосского', 'Аристокена Тарентского'],
    correct: 1,
  }
]

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = quiz[step]

  const onClickStep = (index) => {
    setStep(step+1)

    if (index === question.correct){
      setCorrect(correct+1)
    }
  }

  return (
    <div>
      {step !== quiz.length ? <Question quiz={quiz} step={step} questions={question} onClickStep={onClickStep}/> 
      : <Result quiz={quiz} correct={correct}/>}
    </div>
  );
}

export default App;
