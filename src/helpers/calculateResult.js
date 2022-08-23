const calculateResult = (questionList) => {
    const totalCorrectAnswer = questionList.filter((question) => {
        return question.correct_answer === question.candidateAnswer;
    });
    if (totalCorrectAnswer.length <= 0) {
        return 0;
    }
    return totalCorrectAnswer.length
};
export default calculateResult;