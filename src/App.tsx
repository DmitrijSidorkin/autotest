import { useState, type CSSProperties, type Dispatch, type SetStateAction } from 'react'
// 1. Data Structure: 10 Questions with correct index (0-2)
interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Kas yra stabdymo kelias?",
    options: ["Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo",
      "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo", 
      "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"],
    correctAnswer: "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo"
  },
  {
    id: 2,
    question: "Kas yra sustojimo kelias?",
    options: ["Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo",
      "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo", 
      "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"],
    correctAnswer: "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo"
  },
  {
    id: 3,
    question: "Kas yra stabdymo laikas?",
    options: ["Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo",
      "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo", 
      "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"],
    correctAnswer: "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo"
  },
  {
    id: 4,
    question: "kas yra sustojimo laikas?",
    options: ["Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo",
      "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo", 
      "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"],
    correctAnswer: "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"
  },
  {
    id: 5,
    question: "Kas yra reakcijos laikas?",
    options: ["Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo",
      "Atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo", 
      "Atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo", 
      "Laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį"],
    correctAnswer: "Laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo"
  },
  {
    id: 6,
    question: "Kaip vadinamas laiko tarpas tarp kliūties pastebėjimo ir stabdžio pedalo paspaudimo?",
    options: ["Stabdymo kelias", "Stabdymo laikas", "Sustojimo kelias", "Sustojimo laikas", "Reakcijos laikas"],
    correctAnswer: "Reakcijos laikas"
  },
  {
    id: 7,
    question: "Kaip vadinamas atstumas nuo stabdžio pedalo paspaudimo iki visiško transporto priemonės sustojimo?",
    options: ["Stabdymo kelias", "Stabdymo laikas", "Sustojimo kelias", "Sustojimo laikas", "Reakcijos laikas"],
    correctAnswer: "Stabdymo kelias"
  },
  {
    id: 8,
    question: "Kaip vadinamas atstumas nuo kliūties pastebėjimo iki transporto priemonės visiško sustojimo",
    options: ["Stabdymo kelias", "Stabdymo laikas", "Sustojimo kelias", "Sustojimo laikas", "Reakcijos laikas"],
    correctAnswer: "Sustojimo kelias"
  },
  {
    id: 9,
    question: "Kaip vadinamas laikas kurį transporto priemonė užtrunka visiškai sustoti nuo stabdžio pedalo paspaudimo",
    options: ["Stabdymo kelias", "Stabdymo laikas", "Sustojimo kelias", "Sustojimo laikas", "Reakcijos laikas"],
    correctAnswer: "Stabdymo klaikas"
  },
  {
    id: 10,
    question: "Kaip vadinamas laikas kurį transporto priemonė užtrunka visiškai sustoti pastebėjus kliūtį",
    options: ["Stabdymo kelias", "Stabdymo laikas", "Sustojimo kelias", "Sustojimo laikas", "Reakcijos laikas"],
    correctAnswer: "Sustojimo laikas"
  }
]

shuffleArr(questions)
shuffleAnswers(questions)

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const handleSelect = (questionId: number, optionIndex: number) => {

    if (answers[questionId] !== undefined) return

    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }
  return (
    <div style={{ width: '800px', margin: '0 auto', padding: '100px', fontFamily: 'sans-serif', height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{display: 'flex', flexDirection:'row', gap:'10px', justifyContent:'center', marginBottom: '20px'}}>
        {questions.map((q, cardIndex) => {
          let buttonStyle: CSSProperties = {
                  width:'40px',
                  height:'40px',
                  fontSize:'1rem',
                  margin: '5px 0',
                  border: '2px solid #ffffff91',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#07070721',
                  color: '#f0ebeb',
                  textShadow: 'none'
                }
           if (answers[cardIndex] !== undefined) {
              if (answers[cardIndex] === q.options.indexOf(q.correctAnswer)) {
                buttonStyle = { ...buttonStyle, backgroundColor: '#1a701d', color: '#f0ebeb' }
              } else {
                buttonStyle = { ...buttonStyle, backgroundColor: '#a82e25', color: '#f0ebeb' }
              } 
                }
          return(<button style={buttonStyle} onClick={() => setCurrentQuestion(cardIndex)}>{cardIndex+1}</button>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '50px', flexDirection: 'column' }}>
      {questions.map((q, questionIndex) => {
        const selected = answers[questionIndex] // User's choice or undefined

        let cardStyle: CSSProperties = {
          marginBottom: '20px',
          padding: '15px',
          border: '1px solid #1f73b8',
          borderRadius: '8px',
          backgroundColor: '#181717',
        }
        if (questionIndex === currentQuestion) {
          cardStyle = { ...cardStyle, visibility: 'visible', display:'block' }
        } else {
          cardStyle = { ...cardStyle, visibility: 'hidden', display: 'none' }
        }
        return (
          <div key={questionIndex} style={cardStyle}>
            <h3 style = {{textAlign:'left', marginLeft: '15px'}}>{q.question}</h3>
            
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              {q.options.map((opt, idx) => {
                // Determine visual state based on answer status
                let buttonStyle: CSSProperties = {
                  padding: '10px',
                  margin: '5px 0',
                  border: '2px solid #ffffff91',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#07070721',
                  color: '#f0ebeb',
                  textShadow: 'none',
                  fontSize: '0.9rem',
                  textAlign: 'left'
                }
                // Logic for highlighting after selection
                if (selected !== undefined) {
                  if (idx === q.options.indexOf(q.correctAnswer)) {
                    // Correct answer is always green
                    buttonStyle = { ...buttonStyle, backgroundColor: '#1a701d', color: '#f0ebeb' }
                  } else if (idx === selected && idx !== q.options.indexOf(q.correctAnswer)) {
                    // Wrong selected answer is red
                    buttonStyle = { ...buttonStyle, backgroundColor: '#a82e25', color: '#f0ebeb' }
                  } else if (idx !== selected) {
                    // Unselected incorrect answers become grayed out
                    buttonStyle = { ...buttonStyle, opacity: 0.5, cursor: 'default' }
                  }
                }
                return (
                  <button
                    key={idx}
                    style={buttonStyle}
                    onClick={() => handleSelect(questionIndex, idx)}
                    disabled={selected !== undefined} // Disable if answered
                  >
                    {idx+1}. {opt}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
      </div>
      <div style = {{display: 'flex', flexDirection: 'row'}}>
          <button style = {{padding: '10px', fontSize: '1.5rem', width: '60px', height: '60px', paddingBottom: '30px',  border: '2px solid #ffffff91', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#07070721', color: '#f0ebeb', textShadow: 'none'}} onClick={() => previousQuestion(currentQuestion, setCurrentQuestion)}>←</button>
          <h2 style = {{flexGrow: 2, alignContent: 'center'}}>{`${currentQuestion+1}/${questions.length}`}</h2>
        <button style = {{padding: '10px', fontSize: '1.5rem', width: '60px', height: '60px', paddingBottom: '30px',  border: '2px solid #ffffff91', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#07070721', color: '#f0ebeb', textShadow: 'none'}} onClick={() => nextQuestion(currentQuestion, setCurrentQuestion, questions)}>→</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', flexGrow: 2, alignContent: 'flex-end' }}>
        {/*  */}
          <button 
            onClick={() => resetTest(questions, setAnswers, setCurrentQuestion)} 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Bandyti dar kartą
          </button>
      </div>
    </div>
  )
}

function nextQuestion (currentQuestion: number, setCurrentQuestion: Dispatch<SetStateAction<number>>, questions: Question[]) {
  if (currentQuestion < questions.length-1) {
    setCurrentQuestion(currentQuestion+1)
  }
}

function previousQuestion (currentQuestion: number, setCurrentQuestion: Dispatch<SetStateAction<number>>) {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion-1)
  }
}


function resetTest(
  questions: Question[],
  setAnswers: Dispatch<SetStateAction<Record<number, number>>>,
  setCurrentQuestion: Dispatch<SetStateAction<number>>,
) {
  shuffleArr(questions)
  shuffleAnswers(questions)
  setAnswers({})
  setCurrentQuestion(0)
}

function shuffleAnswers(questions: Question[]) {
  for (let i = 0; i < questions.length; i++) {
    shuffleArr(questions[i].options)
  }
}

function shuffleArr<T>(array: T[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    // eslint-disable-next-line prefer-const
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export default App