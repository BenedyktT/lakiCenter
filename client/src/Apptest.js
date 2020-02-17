import React from "react";

const Apptest = () => {
  const test = [
    {
      date: "2020-02-17",
      ocupancy: 35,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 14,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 13,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 17,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 26,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 16,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 38,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 7,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 25,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 24,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 9,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 10,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 19,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 4,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 19,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 22,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 14,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 2,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 1,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 9,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 18,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 15,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 11,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 4,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 17,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 0,
      baseCode: "BUN-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 35,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 14,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 13,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 17,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 26,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 16,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 38,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 7,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 25,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 24,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 9,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 10,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 19,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 4,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 19,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 22,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 14,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 2,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 1,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 9,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 18,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 15,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 11,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 4,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 17,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 19,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 22,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 14,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 2,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 1,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 9,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 18,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 15,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 23,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 11,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 4,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 8,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 7,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 24,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 17,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 12,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 10,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 6,
      baseCode: "ECO-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 3,
      baseCode: "ECO-S"
    },
    {
      date: "2020-02-17",
      ocupancy: 35,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-18",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-19",
      ocupancy: 14,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-20",
      ocupancy: 13,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-21",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-22",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-23",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-24",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-25",
      ocupancy: 17,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-26",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-27",
      ocupancy: 26,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-28",
      ocupancy: 16,
      baseCode: "DBL-S"
    },
    {
      date: "2020-02-29",
      ocupancy: 38,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-01",
      ocupancy: 28,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-02",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-03",
      ocupancy: 7,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-04",
      ocupancy: 6,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-05",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-06",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-07",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-08",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-09",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-10",
      ocupancy: 25,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-11",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-12",
      ocupancy: 2,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-13",
      ocupancy: 3,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-14",
      ocupancy: 32,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-15",
      ocupancy: 24,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-16",
      ocupancy: 39,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-17",
      ocupancy: 5,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-18",
      ocupancy: 9,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-19",
      ocupancy: 12,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-20",
      ocupancy: 10,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-21",
      ocupancy: 19,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-22",
      ocupancy: 4,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-23",
      ocupancy: 22,
      baseCode: "DBL-S"
    },
    {
      date: "2020-03-24",
      ocupancy: 22,
      baseCode: "DBL-S"
    }
  ];
  let obj = test;

  obj = obj.reduce((acc, curr) => {
    const test = acc.filter(e => e.date === curr.date);
    if (!test.length) {
      return [...acc, curr];
    }
    test.console.log(test);
    return acc;
  }, []);
  console.log(obj);
  return <div></div>;
};

export default Apptest;
