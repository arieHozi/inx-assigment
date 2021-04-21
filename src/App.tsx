import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LineC from "./components/LineChart";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function App() {
  const [data, setData] = useState<any>([]);
  const [pos, setPos] = useState<any>(
    localStorage.getItem("lastPos") || { x: 0, y: 0 }
  );

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://6080641fa5be5d00176dd9b9.mockapi.io/api/currency/getCurrency"
        )
        .then((response) => {
          const { data } = response;
          setData(data);
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, []);

  const setPosition = (e: any) => {
    const pos = e.target.getBoundingClientRect();
    localStorage.setItem(
      "lastPos",
      JSON.stringify({ x: pos.left, y: pos.top })
    );
  };

  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <Draggable defaultPosition={JSON.parse(pos)} onStop={setPosition}>
          <div>
            <LineC data={data} />
          </div>
        </Draggable>
      </Suspense>
    </div>
  );
}

export default App;
