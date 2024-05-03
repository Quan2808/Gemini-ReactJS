import { useContext } from "react";
import "./Main.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <main>
      <div className="nav">
        <p>Gemini</p>
      </div>
      <MDBContainer>
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev!</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <MDBRow className="row-cols-1 row-cols-md-3 g-4">
              <MDBCol>
                <MDBCard className=" rounded-9">
                  <MDBCardBody className=" rounded-9">
                    Improve the readability of the following code
                    <div className="d-flex align-items-end flex-column">
                      <MDBIcon fas icon="code" />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className=" rounded-9">
                  <MDBCardBody className=" rounded-9">
                    Suggest beautiful places to see on an upcoming road trip
                    <div className="d-flex align-items-end flex-column">
                      <MDBIcon far icon="compass" />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className=" rounded-9">
                  <MDBCardBody className=" rounded-9">
                    Briefly summarize this concept: urban planning
                    <div className="d-flex align-items-end flex-column">
                      <MDBIcon far icon="lightbulb" />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <MDBIcon fas icon="user-alt" />
                <p>{recentPromt}</p>
              </div>
              <div className="result-data">
                <img src="/gemini.svg" alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p>{resultData}</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom mb-5">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here."
            />
            <div>
              <MDBIcon far icon="image" size="lg" />
              <MDBIcon fas icon="microphone" size="lg" />
              <div onClick={() => onSent()}>
                <MDBIcon fas icon="arrow-right" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </main>
  );
};

export default Main;
