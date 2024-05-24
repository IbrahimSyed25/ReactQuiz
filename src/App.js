import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finish from "./Finish";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizContext } from "./Context/QuizContext";

export default function App() {
  const { status } = useQuizContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Ready" && <StartScreen />}
        {status === "Error" && <Error />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            {
              <Footer>
                <Timer />
                <NextQuestion />
              </Footer>
            }
          </>
        )}
        {status === "Finish" && <Finish />}
      </Main>
    </div>
  );
}
