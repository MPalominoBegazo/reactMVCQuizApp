
class Model {

      constructor(questionsArray) {
            this.cont = 0,
            this.barCounter = 0;
            this.questions = [];
            this.arrayQ = questionsArray;
            this.render = undefined;
      }

      subscribe(render) {
            this.render = render;
      }
      inform() {

            //console.log(this.questions.map(e => e.question));
            this.render();
      }
      nextQuestion(question) {
            this.questions.push({
                  image: question.image,
                  question: question.question,
                  answerOptions: question.answers,
                  answer: question.correctAnswer
            });
            this.cont++;
            this.inform();

      }
}

const App = ({ title, model }) => {
      
      const answers = model.arrayQ.map((question, index) => {
            console.log(question);
            return (
                  <li key={index}>
                        <a
                              className="btn btn-block btn-warning btnClic"
                              id={index}
                              onChange={e =>
                                    model.nextQuestion(index, {
                                          image: question.image,
                                          question: question.question,
                                          answerOptions: question.answerOptions,
                                          answer: question.answer

                                    })}
                              value={question.answerOptions}
                        ></a>
                  </li >

            );
      });

      const Images = model.arrayQ.map((question, index) => {
            return (
                  <div key={index}>
                      <img className="imageSize" align="center" src={question.image} alt="" />
                  </div>
              );
      });

      return (
            <div className="questions container-fluid">
                  <h1>{title}</h1>
                  <div>{Images}</div>
                  <ol> {answers} </ol>
            </div>
      );
};

const questionsArray = [
      {
            image: "img/History/paracas.jpg",
            question: "¿De qué cultura son caracteriticas las trepanaciones craneanas?",
            answers: ["Nazca", "Chimu", "Paracas"],
            correctAnswer: "Paracas"
      },
      {
            image: "img/History/virrey.jpg",
            question: "¿Cuál fue el último virrey del Perú?",
            answers: ["Francisco de Borja y Aragon", "Jose de la Serna Hinojosa", "Blasco Nuñez Vela"],
            correctAnswer: "Jose de la Serna Hinojosa"
      },
      {
            image: "img/History/mancoInca.jpg",
            question: "¿Quien ayudo a los españoles en su camino de Cajamarca a Cusco en 1583?",
            answers: ["Calcuchimac", "Manco Inca", "Huascar"],
            correctAnswer: "Manco Inca"

      },
      {
            image: "img/History/primerGobierno.jpg",
            question: "¿Cuanto tiempo duró el gobierno del primer Presidente del Peru?",
            answers: ["24 meses", "13 meses", "4 meses"],
            correctAnswer: "4 meses"
      },
      {
            image: "img/History/conflictos.jpg",
            question: "¿Con cuál de estos paises el Perú tuvo más conflictos armados?",
            answers: ["Chile", "Ecuador", "Bolivia"],
            correctAnswer: "Ecuador"
      }
];

let model = new Model(questionsArray);
let counter = 0;
let render = () => {
      console.log('render times: ', counter++);
      ReactDOM.render(
            <App title="QuizApp" model={model} />,
            document.getElementById('containerQuizz')
      );
};
model.subscribe(render);
render(); 