import HomeScreen from "../pages/Quiz/HomeScreen";
import Result from "../pages/Quiz/Result";
import Container from "../pages/Quiz/Container";
const list = [
    {
        name: "Home",
        path: "/",
        element: <HomeScreen />
    },
    {
        name: "Quiz",
        path: "/quiz",
        element: <Container />
    },
    {
        name: "Result",
        path: "/result",
        element: <Result />
    }
];
export default list;