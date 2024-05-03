import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPromt, setRecentPromt] = useState("");
  const [prevPromts, setPrevPromts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setPrevPromts(input);

    const response = await runChat(input);

    let responseArray = response.split("**");
    let newresponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 1) {
        newresponse += "<b>" + responseArray[i] + "</b>";
      } else {
        newresponse += responseArray[i];
      }
    }

    let newresponse2 = newresponse.split("*").join("<br/>");
    let newResponseArray = newresponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPromts,
    setPrevPromts,
    onSent,
    setRecentPromt,
    recentPromt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
