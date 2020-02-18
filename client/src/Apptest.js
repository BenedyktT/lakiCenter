import React from "react";

const Apptest = () => {
  const test = [
    [
      {
        date: "2020-02-17",
        availability: "13",
        rate: "151.65",
        occupancy: 26,
        baseCode: "DBL-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "151.65",
        occupancy: 39,
        baseCode: "DBL-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "16",
        rate: "129.0",
        occupancy: 8,
        baseCode: "ECO-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "141.0",
        occupancy: 24,
        baseCode: "ECO-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "0",
        rate: "722.15",
        occupancy: 0,
        baseCode: "BUN-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "722.15",
        occupancy: 0,
        baseCode: "BUN-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "0",
        rate: "802.39",
        occupancy: 0,
        baseCode: "BUN-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "802.39",
        occupancy: 0,
        baseCode: "BUN-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "13",
        rate: "168.5",
        occupancy: 26,
        baseCode: "DBL-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "168.5",
        occupancy: 39,
        baseCode: "DBL-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "16",
        rate: "119.4",
        occupancy: 8,
        baseCode: "ECO-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "130.59",
        occupancy: 24,
        baseCode: "ECO-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "16",
        rate: "128.38",
        occupancy: 8,
        baseCode: "ECO-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "140.42",
        occupancy: 24,
        baseCode: "ECO-S"
      }
    ],
    [
      {
        date: "2020-02-17",
        availability: "13",
        rate: "151.65",
        occupancy: 26,
        baseCode: "DBL-S"
      },
      {
        date: "2020-02-18",
        availability: "0",
        rate: "151.65",
        occupancy: 39,
        baseCode: "DBL-S"
      }
    ]
  ]; /* .flat();
  let obj = test.reduce((acc, curr, i, arr) => {
    const x = acc.findIndex(e => e.date === curr.date);
    if (!x) return [...acc, { curr, baseCode: [...curr.baseCode] }];
    return [...acc, curr, [curr.baseCode, x.baseCode]];
  }, []);
  console.log(obj); */
  return <div></div>;
};

export default Apptest;
