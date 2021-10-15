import React, {useState, useEffect} from 'react'
import LineGraph from "./LineGraph";
import Typography from "@mui/material/Typography";

const HomeGraph = ({data, town}) => {
  const [graphData, setGraphData] = useState()
  const [countData, setCountData] = useState()

  useEffect(() => {
    const dates = new Set();
    const flatTypes = new Set();
    data?.map((element) => dates.add(element.month.slice(0, 4)));
    data?.map((element) => flatTypes.add(element.flatType));

    const splitByYear = (data) => {
      let tempArr = [];
      for (let i = 0; i < dates.size; i++) {
        tempArr[i] = [
          Array.from(dates)[i],
          data.reduce((a, b) => {
            b.month.slice(0, 4) === Array.from(dates)[i] &&
              a.push(Math.round(parseInt(b.price)));
            return a;
          }, []),
        ];
      }
      tempArr = tempArr?.map((a) => ({
        x: a[0],
        y: isNaN(Math.round(a[1]?.reduce((a, b) => {return a + b},0) / a[1].length)) ? 0 : Math.round(a[1]?.reduce((a, b) => {return a + b},0) / a[1].length),
      }));
      return tempArr;
    }

    const getCount = (data) => {
      let tempArr = [];
      for (let i = 0; i < dates.size; i++) {
        tempArr[i] = [
          Array.from(dates)[i],
          data.reduce((a, b) => {
            b.month.slice(0, 4) === Array.from(dates)[i] &&
              a.push(Math.round(parseInt(b.price)));
            return a;
          }, []),
        ];
      }
      tempArr = tempArr?.map((a) => ({
        x: a[0],
        y: a[1].length,
      }));
      return tempArr;
    }

    const tempData = []
    const tempCount = []

    for(let i = 0; i < flatTypes.size; i++) {
      let flatTypeData = data.filter(a => a.flatType.toString() === Array.from(flatTypes).sort()[i].toString())
      tempData.push({id: Array.from(flatTypes).sort()[i] === 'MULTI-GENERATION' ? 'M-GEN' : Array.from(flatTypes).sort()[i] === 'EXECUTIVE' ? 'EXEC' : Array.from(flatTypes).sort()[i], color: "hsl(178, 70%, 50%)", data: splitByYear(flatTypeData) })
    }
    for(let i = 0; i < flatTypes.size; i++) {
      let flatTypeData = data.filter(a => a.flatType.toString() === Array.from(flatTypes).sort()[i].toString())
      tempCount.push({id: Array.from(flatTypes).sort()[i] === 'MULTI-GENERATION' ? 'M-GEN' : Array.from(flatTypes).sort()[i] === 'EXECUTIVE' ? 'EXEC' : Array.from(flatTypes).sort()[i], color: "hsl(178, 70%, 50%)", data: getCount(flatTypeData) })
    }
    tempData && setGraphData(tempData)
    tempCount && setCountData(tempCount)
  }, [data])

  console.log(graphData)

  return(
    <Typography component="span">
      <div
        style={{
          margin: "0 auto",
          height: "400px",
          minHeight: "400px",
          marginBottom: "3%",
          width: "80%",
          maxWidth: "1800px",
          border: "1px solid #bcdbdc",
          borderRadius: "5px",
          padding: '0px 20px 0px 20px',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ marginBottom: "-20px", marginTop: '25px', width: "100%", textAlign: "left",fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
          Average Yearly Price for Units in {town} Town
        </h2>
        <LineGraph data={graphData} />
      </div>
      <div
        style={{
          margin: "0 auto",
          height: "400px",
          minHeight: "400px",
          marginBottom: "3%",
          width: "80%",
          maxWidth: "1800px",
          border: "1px solid #bcdbdc",
          borderRadius: "5px",
          padding: '0px 20px 0px 20px',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ marginBottom: "-20px", marginTop: '25px', width: "100%", textAlign: "left", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)'}}>
          Number of Annual Transactions in {town} Town
        </h2>
        <LineGraph data={countData} />
      </div>
    </Typography>
  )
}

export default HomeGraph