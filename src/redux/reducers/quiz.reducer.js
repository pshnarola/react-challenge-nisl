import { QUESTION } from "../actions";
const initialState = {
    questionList: [],
    currentQuestion: null,
    isLoading: false,
    error: ""
};
const quiz = (state = initialState, { type, payload }) => {
    let currentQuestion = null;
    switch (type) {
        case QUESTION.GET_QUESTION_LIST_PENDING:
            return { ...state, isLoading: true }
        case QUESTION.GET_QUESTION_LIST_SUCCESS:
            currentQuestion = Array.isArray(payload) && payload.length ?
                { question: payload[0], index: 0 } : null;
            return {
                ...state,
                questionList: payload,
                currentQuestion: currentQuestion,
                isLoading: false
            };
        case QUESTION.GET_QUESTION_LIST_FAILED:
            return { ...state, isLoading: false, error: payload }
        case QUESTION.CHANGE_CURRENT_ANSWER:
            const index = state.currentQuestion.index + 1;
            currentQuestion = index === state.questionList.length ?
                { question: state.questionList[0], index: 0 } :
                { question: state.questionList[index], index };
            return { ...state, currentQuestion }
        case QUESTION.SET_CANDIDATE_ANSWER:
            state.questionList[payload.index].candidateAnswer = payload.candidateAnswer;
            return state;
        default:
            return state;
    }
}
export default quiz;