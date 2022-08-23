import axiosInstance from "../../configes/http-config";
import { QUESTION } from "../actions";
const fetchQuestion = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: QUESTION.GET_QUESTION_LIST_PENDING });
            const response = await axiosInstance.get("/api.php?amount=10&difficulty=hard&type=boolean");
            dispatch({
                type: QUESTION.GET_QUESTION_LIST_SUCCESS,
                payload: response.data.results
            });
        } catch (error) {
            // TODO: Customer Error hanlder
            if (error.response) {
                dispatch({
                    type: QUESTION.GET_QUESTION_LIST_FAILED,
                    payload: error.message
                })
            } else if (error.request) {
                // For Internet connection down.
                dispatch({
                    type: QUESTION.GET_QUESTION_LIST_FAILED,
                    payload: 'Network Error'
                })
            } else {
                dispatch({
                    type: QUESTION.GET_QUESTION_LIST_FAILED,
                    payload: error.message
                })
            }
        }
    }
}
export default fetchQuestion;