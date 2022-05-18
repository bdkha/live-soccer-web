import BXH from "../component/bxh";
import FixturesLeague from "../component/fixturesleague";
import Top from "../component/top";
import { useEffect, useState } from "react";

const Leagues = () => {
  const [league, setLeague] = useState(1);
  const [bxhid, setBxhid] = useState("2021");
  const [fixtureid, setFixtureid] = useState("39");

  const setID = () => {
    switch (league) {
      case 1:
        setBxhid("2021");
        setFixtureid("39");
        break;
      case 2:
        setBxhid("2014");
        setFixtureid("140");
        break;
      case 3:
        setBxhid("2002");
        setFixtureid("78");
        break;
      case 4:
        setBxhid("2015");
        setFixtureid("61");
        break;
      case 5:
        setBxhid("2019");
        setFixtureid("135");
        break;
      default:
        setBxhid("2021");
        setFixtureid("39");
        setLeague(1);
        break;
    }
  };

  useEffect(() => {
    setID();
  }, [league]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#fff",
            color: league === 1 ? "orange" : "black",
          }}
          onClick={() => setLeague(1)}
        >
          Premier League
        </button>
        <button
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#fff",
            color: league === 2 ? "orange" : "black",
          }}
          onClick={() => setLeague(2)}
        >
          LaLiga
        </button>
        <button
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#fff",
            color: league === 3 ? "orange" : "black",
          }}
          onClick={() => setLeague(3)}
        >
          Bundesliga
        </button>
        <button
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#fff",
            color: league === 4 ? "orange" : "black",
          }}
          onClick={() => setLeague(4)}
          href="#"
        >
          Ligue 1
        </button>
        <button
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#fff",
            color: league === 5 ? "orange" : "black",
          }}
          onClick={() => setLeague(5)}
        >
          Serie A
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <BXH idLeague={bxhid} />
        <FixturesLeague id={fixtureid} />
        <Top id={fixtureid} />
      </div>
    </div>
  );
};

export default Leagues;
