import React from 'react'

export default class Personnage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            healthpoints: 100,
            isCorrect: false,
            numQuestion: 0,
            answer: '',
            questions: []
        }
    }

    componentDidMount() {
        const datas = require('../datas/dataPerso.json')
        const questions = datas.data.find(personnage => personnage[this.props.namePerso])
        this.setState({ questions: questions[this.props.namePerso] })
    }

    // clock() {
    //     const { healthpoints, numQuestion } = this.state
    //     setTimeout(() => this.setState({ healthpoints: healthpoints - 10, numQuestion: numQuestion + 1 }), 10000)
    // }

    render() {
        const { isCorrect, numQuestion, healthpoints, answer, questions } = this.state
        return (
            <div>
                <h1>Points de vie : {healthpoints} </h1>
                <img style={{ height: 100, width: 100 }} src={healthpoints > 50 ? require('../icons/fullLife.png') : healthpoints > 0 ? require('../icons/halfLife.png') : require('../icons/noLife.png')} alt={'lifeIcon'} />
                {
                    questions.length !== 0 ?
                        healthpoints > 0 ?
                            numQuestion === 10 ?
                                <h1>TU ME CONNAIS PAR COEUR !</h1>
                                :
                                <>
                                    {
                                        !isCorrect ?
                                            <h1 style={{ margin: 30 }}>{questions[numQuestion].question}</h1>
                                            : <h1 style={{ color: 'green' }}>Bonne réponse !</h1>
                                    }
                                    {
                                        isCorrect ?
                                            <button onClick={() => this.setState({ numQuestion: numQuestion + 1, isCorrect: false })}>Question suivante</button>
                                            :
                                            <>
                                                <input value={answer} onChange={event => this.setState({ answer: event.target.value })} />
                                                <button disabled={answer === '' ? true : false} onClick={() => answer.toLowerCase() === questions[numQuestion].answer.toLowerCase() ? this.setState({ isCorrect: true, answer: '' }) : this.setState({ healthpoints: healthpoints - 5, answer: '' })}>Valider</button>
                                            </>
                                    }
                                </>
                            :
                            <h1>TU M'AS TUE !</h1>
                        : null
                }
            </div>
        )
    }
}