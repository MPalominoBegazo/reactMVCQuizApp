
class Model {

      constructor() {
            this.cont = 0,
            this.barCounter = 0;
            this.questions = [];
            this.render = undefined;
      }

      subscribe(render) {
            this.render = render;
      }
      inform() {

            //console.log(this.questions.map(e => e.question));
            this.render();
      }
      onClick(e, index) {
            this.questions.push({
                  image: this.questions[this.cont].image,
                  question: this.questions[this.cont].question,
                  answerOptions: this.questions[this.cont].answers,
                  answer: this.questions[this.cont].correctAnswer
            });
            this.cont ++;
            this.inform();

      }
}

const App = ({ title, model }) => {
      const getAnswerList = (answers) => {
            return answers.map((answer, index) => {
                  return (
                        <li key={index}>
                              <a className="btn btn-block btn-warning btnClic" id={index} onClick={(e) => this.onClick(e, index)}>{answer}</a>
                        </li >

                  );
            });
      }
      const AnswerList = ({ answers }) => {

            return (
                  <div>
                        <ul>{getAnswerList(answers)}</ul>
                  </div>
            );
      }
      const Quiz = (props) => {

            return (
                  <div className="quiz">
                        <h2 className="question">{props.question}</h2>
                        <AnswerList answers={props.answerOptions} />

                  </div>
            );
      }
      console.log(model.questions);
      const Images = model.questions.map((question, index) => {
            return (
                  <div>
                        <img className="imageSize" align="center" src={question.image} alt="" />
                  </div>
            );
      });
      
      
      return (
            <div className="questions container-fluid">
                  <h1>{title}</h1>
                  <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                              <div id="myProgress">
                                    <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                          <span class="sr-only"></span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-md-6 col-xs-6 col-sm-6">
                              <Images />
                        </div>
                        <div className="col-md-6 col-xs-6 col-sm-6">
                              <Quiz />
                        </div>
                  </div>

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