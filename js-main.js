// Constants and Configurations
const CONFIG = {
  workingHours: {
    start: 9, // 9 AM
    end: 16.75, // 4:45 PM
  },
  refreshInterval: 60000, // 1 minute

  facts: [
    "The first electric motor was invented by Michael Faraday in 1821.",
    "Lightning strikes the Earth about 100 times every second.",
    "Electricity travels at the speed of light, which is 186,000 miles per second.",
    "The first power plant opened in 1882 and was built by Thomas Edison.",
    "The average bolt of lightning contains enough energy to power a house for a month.",
    "The first electric generator was invented by Michael Faraday in 1831.",
    "The first commercial electric power transmission system was installed in 1886 in Great Barrington, Massachusetts.",
    "The first commercial electric power plant in the United States was the Pearl Street Station, which opened in New York City in 1882.",
    "The first long-distance transmission of high-voltage alternating current (AC) electricity was demonstrated in 1884 by Lucien Gaulard and John Dixon Gibbs.",
    "The first practical incandescent light bulb was invented by Thomas Edison in 1879.",
    "The first electric refrigerator was invented by William Cullen in 1755.",
    "The first electric elevator was installed in the Equitable Life Assurance Building in New York City in 1889.",
    "The first electric typewriter was invented by Werner Gschwindt in 1886.",
    "The first electric guitar was invented by George Beauchamp in 1931.",
    "The first electric car was invented by Robert Anderson in 1837.",
    "The first electric toaster was invented by Alan MacMasters in 1893.",
    "The first electric washing machine was invented by Alva Fisher in 1908.",
    "The first electric iron was invented by Henry Seely in 1882.",
    "The first electric vacuum cleaner was invented by Hubert Cecil Booth in 1901.",
    "The first electric clock was invented by Edward Calahan in 1855.",
    "The first electric train was invented by Robert Davidson in 1837.",
    "The first electric welding machine was invented by N.G. Slavianoff in 1887.",
    "The first electric dental drill was invented by George Green in 1871.",
    "The first electric organ was invented by Thaddeus Cahill in 1897.",
    "The first electric telephone was invented by Alexander Graham Bell in 1876.",
    "The first electric telegraph was invented by Samuel Morse in 1844.",
    "The first electric arc lamp was invented by Humphry Davy in 1806.",
    "The first electric battery was invented by Alessandro Volta in 1800.",
    "The first electric motor was patented by Thomas Davenport in 1837.",
    "The first electric generator was patented by Michael Faraday in 1831.",
    "The first electric transformer was invented by William Stanley in 1886.",
    "The first electric fuse was invented by Thomas Edison in 1890.",
    "The first electric oven was invented by William Hadaway in 1891.",
    "The first electric hairdryer was invented by Alexandre Godefroy in 1890.",
    "The first electric blender was invented by Stephen Poplawski in 1922.",
    "The first electric razor was invented by Jacob Schick in 1928.",
    "The first electric sewing machine was invented by Elias Howe in 1846.",
    "The first electric furnace was invented by Alice Parker in 1919.",
    "The first electric water heater was invented by Edwin Ruud in 1889.",
    "The first electric refrigerator was invented by Fred Wolf in 1913.",
    "The first electric lamp was invented by Humphry Davy in 1806.",
    "The first electric motor was invented by Michael Faraday in 1821.",
    "The first electric generator was invented by Michael Faraday in 1831.",
    "The first electric telegraph was invented by Samuel Morse in 1844.",
    "The first electric telephone was invented by Alexander Graham Bell in 1876.",
    "The first electric light bulb was invented by Thomas Edison in 1879.",
    "The first electric elevator was invented by Werner von Siemens in 1880.",
    "The first electric power plant was built by Thomas Edison in 1882.",
    "The first electric welding machine was invented by N.G. Slavianoff in 1887.",
    "The first electric automobile was invented by William Morrison in 1891.",
    "The first electric refrigerator was invented by Fred Wolf in 1913.",
    "The first electric washing machine was invented by Alva Fisher in 1908.",
    "The first electric vacuum cleaner was invented by Hubert Cecil Booth in 1901.",
    "The first electric toaster was invented by Alan MacMasters in 1893.",
    "The first electric iron was invented by Henry Seely in 1882.",
    "The first electric typewriter was invented by Werner Gschwindt in 1886.",
    "The first electric guitar was invented by George Beauchamp in 1931.",
    "The first electric organ was invented by Thaddeus Cahill in 1897.",
    "The first electric clock was invented by Edward Calahan in 1855.",
    "The first electric train was invented by Robert Davidson in 1837.",
    "The first electric dental drill was invented by George Green in 1871.",
    "The first electric blender was invented by Stephen Poplawski in 1922.",
    "The first electric razor was invented by Jacob Schick in 1928.",
    "The first electric sewing machine was invented by Elias Howe in 1846.",
    "The first electric furnace was invented by Alice Parker in 1919.",
    "The first electric water heater was invented by Edwin Ruud in 1889.",
    "The first electric hair dryer was invented by Alexandre Godefroy in 1890.",
    "The first electric oven was invented by William Hadaway in 1891.",
    "The first electric power transmission system was installed in 1886 in Great Barrington, Massachusetts.",
    "The first commercial electric power plant in the United States was the Pearl Street Station, which opened in New York City in 1882.",
    "The first long-distance transmission of high-voltage alternating current (AC) electricity was demonstrated in 1884 by Lucien Gaulard and John Dixon Gibbs.",
    "The first electric motor was patented by Thomas Davenport in 1837.",
    "The first electric generator was patented by Michael Faraday in 1831.",
    "The first electric transformer was invented by William Stanley in 1886.",
    "The first electric fuse was invented by Thomas Edison in 1890.",
    "The first electric arc lamp was invented by Humphry Davy in 1806.",
    "The first electric battery was invented by Alessandro Volta in 1800.",
    "The first electric telephone was invented by Alexander Graham Bell in 1876.",
    "The first electric telegraph was invented by Samuel Morse in 1844.",
    "The first electric elevator was installed in the Equitable Life Assurance Building in New York City in 1889.",
    "The first electric car was invented by Robert Anderson in 1837.",
    "The first electric refrigerator was invented by William Cullen in 1755.",
    "The first electric welding machine was invented by N.G. Slavianoff in 1887.",
    "The first electric organ was invented by Thaddeus Cahill in 1897.",
    "The first electric clock was invented by Edward Calahan in 1855.",
    "The first electric train was invented by Robert Davidson in 1837.",
    "The first electric dental drill was invented by George Green in 1871.",
    "The first electric blender was invented by Stephen Poplawski in 1922.",
    "The first electric razor was invented by Jacob Schick in 1928.",
    "The first electric sewing machine was invented by Elias Howe in 1846.",
    "The first electric furnace was invented by Alice Parker in 1919.",
    "The first electric water heater was invented by Edwin Ruud in 1889.",
    "The first electric hair dryer was invented by Alexandre Godefroy in 1890.",
    "The first electric oven was invented by William Hadaway in 1891.",
  ],
};

// Calendar Data
const CALENDAR_DATA = [
  {
    date: "2025-01-20",
    day: "Monday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-21",
    day: "Tuesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-22",
    day: "Wednesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-23",
    day: "Thursday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Netaji Birthday",
  },
  {
    date: "2025-01-24",
    day: "Friday",
    workingDay: "4",
    status: "Workingday",
    remarks: "",
  },
  {
    date: "2025-01-25",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-01-26",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Republic Day",
  },
  {
    date: "2025-01-27",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-28",
    day: "Tuesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Gwthar Bathou San",
  },
  {
    date: "2025-01-29",
    day: "Wednesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-30",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-31",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Me-Dam-Me-Phi",
  },
  {
    date: "2025-02-01",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-02",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-03",
    day: "Monday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-04",
    day: "Tuesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-05",
    day: "Wednesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-06",
    day: "Thursday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-07",
    day: "Friday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-08",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-02-09",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-10",
    day: "Monday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-11",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-12",
    day: "Wednesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bir Chilaray Divas",
  },
  {
    date: "2025-02-13",
    day: "Thursday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-14",
    day: "Friday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-15",
    day: "Saturday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-16",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-17",
    day: "Monday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-18",
    day: "Tuesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-19",
    day: "Wednesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-20",
    day: "Thursday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-21",
    day: "Friday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-22",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-02-23",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-24",
    day: "Monday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-25",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-26",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-27",
    day: "Thursday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-28",
    day: "Friday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-01",
    day: "Saturday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-02",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-03",
    day: "Monday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-04",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-05",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-06",
    day: "Thursday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-07",
    day: "Friday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-08",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-03-09",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-10",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-11",
    day: "Tuesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-12",
    day: "Wednesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-13",
    day: "Thursday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-14",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Dol Jatra",
  },
  {
    date: "2025-03-15",
    day: "Saturday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-16",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-17",
    day: "Monday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-18",
    day: "Tuesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-19",
    day: "Wednesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-20",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-21",
    day: "Friday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-22",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-03-23",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-24",
    day: "Monday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-25",
    day: "Tuesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-26",
    day: "Wednesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-27",
    day: "Thursday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-28",
    day: "Friday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-29",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-30",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-31",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Id-Ul-Fitre",
  },
  {
    date: "2025-04-01",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-02",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-03",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-04",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-05",
    day: "Saturday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-06",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-07",
    day: "Monday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-08",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-09",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-10",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-11",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-12",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-04-13",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-14",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-15",
    day: "Tuesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-16",
    day: "Wednesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-17",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-18",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Good Friday",
  },
  {
    date: "2025-04-19",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-20",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-21",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sati Sadhani Divas",
  },
  {
    date: "2025-04-22",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-23",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-24",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-25",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-26",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-04-27",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-28",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Tithi of Damodar Dev",
  },
  {
    date: "2025-04-29",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-30",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-01",
    day: "Thursday",
    workingDay: "-",
    status: "Holiday",
    remarks: "May Day",
  },
  {
    date: "2025-05-02",
    day: "Friday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-03",
    day: "Saturday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-04",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-05-05",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-06",
    day: "Tuesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-07",
    day: "Wednesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-08",
    day: "Thursday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-09",
    day: "Friday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-10",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-05-11",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
];

// Class Schedules
const CLASS_SCHEDULES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr1)(PS,LK) /LIB (grp 2)",
      instructor: "Staff",
    },
    { time: "12:45 PM — 1:45 PM", subject: "EM-I", instructor: "P.S" },
    { time: "1:45 PM — 3:45 PM", subject: "ENC", instructor: "P.C" },
    { time: "3:45 PM — 4:45 PM", subject: "LIB", instructor: "Staff" },
  ],
  2: [
    { time: "9:00 AM — 12:00 Noon", subject: "EEDD", instructor: "P.C" },
    { time: "12:45 PM — 1:45 PM", subject: "EEM", instructor: "P.S" },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "LECN LAB(Gr2) (PC,LK)/EM-I LAB (Gr1) (PS,SI)",
      instructor: "Staff",
    },
  ],
  3: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB(Gr2)(PS,LK) /LIB(grp 1)",
      instructor: "Staff",
    },
    { time: "12:45 PM — 1:45 PM", subject: "DE", instructor: "P.C" },
    { time: "1:45 PM — 3:45 PM", subject: "EM-I", instructor: "P.S" },
  ],
  4: [
    { time: "9:00 AM — 12:00 Noon", subject: "EEDD", instructor: "P.C" },
    { time: "12:45 PM — 2:45 PM", subject: "EMMI-I", instructor: "P.S" },
    { time: "2:45 PM — 3:45 PM", subject: "PP-II", instructor: "Staff" },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
    },
  ],
  5: [
    { time: "9:00 AM — 10:00 AM", subject: "ENC", instructor: "P.C" },
    { time: "10:00 AM — 11:00 AM", subject: "DE", instructor: "P.C" },
    { time: "11:00 AM — 12:00 Noon", subject: "EEM", instructor: "P.S" },
    {
      time: "12:45 PM — 3:45 PM",
      subject: "ECN LAB(Gr1) (PC,LK)/EM-I LAB (Gr2) (PS,SI)",
      instructor: "Staff",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
    },
  ],
  6: [
    { time: "9:00 AM — 10:00 AM", subject: "EM-I", instructor: "P.S" },
    { time: "10:00 AM — 12:00 Noon", subject: "EMMI-I", instructor: "P.S" },
    { time: "12:45 PM — 1:45 PM", subject: "EEM", instructor: "P.S" },
    { time: "1:45 PM — 2:45 PM", subject: "DE", instructor: "P.C" },
    { time: "2:45 PM — 4:45 PM", subject: "PP-II", instructor: "Staff" },
  ],
};

// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.init();
  }

  init() {
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.setInitialTheme();
  }

  setInitialTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateToggleIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateToggleIcon(newTheme);
  }

  updateToggleIcon(theme) {
    const icon = this.themeToggle.querySelector("i");
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

class CalendarManager {
  constructor() {
    // DOM references
    this.dateSection = document.getElementById("currentDate");
    this.daySection = document.getElementById("currentDay");
    this.workingDayBadge = document.getElementById("workingDayBadge");
    this.scheduleGrid = document.getElementById("scheduleGrid");
    this.statusIndicator = document.getElementById("statusIndicator");

    this.calendarBody = document.getElementById("calendarBody");
    this.calendarFilter = document.getElementById("calendarFilter");

    this.currentFilter = "all";
    this.init();
  }

  // Initialize the calendar's functionality
  init() {
    this.updateDateTime(); // Keep time updated
    setInterval(() => this.updateDateTime(), CONFIG.refreshInterval || 60000); // Refresh every minute
    const now = new Date();
    this.refreshInformation(now); // Load today's information
    this.setupFilters(); // Handle calendar filters
  }

  updateDateTime() {
    const now = new Date();
    const hours = now.getHours();

    this.dateSection.textContent = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    this.daySection.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const isWorkingHours =
      hours >= (CONFIG.workingHours?.start || 9) &&
      hours < (CONFIG.workingHours?.end || 16.75);

    if (isWorkingHours) {
      this.statusIndicator.className =
        "header__status active animate__animated animate__fadeIn";
      this.statusIndicator.title = "Working Hours (9:00 AM - 4:45 PM)";
    } else {
      this.statusIndicator.className =
        "header__status inactive animate__animated animate__fadeIn";
      this.statusIndicator.title = "Outside Working Hours";
    }
  }

  refreshInformation(date) {
    const todayDateString = this.formatDateToISO(date);

    const todayData = CALENDAR_DATA.find(
      (entry) => entry.date === todayDateString
    );

    if (todayData) {
      this.updateWorkingDayBadge(todayData);
      this.updateScheduleGrid(todayData);
    } else if (date > new Date(CALENDAR_DATA[CALENDAR_DATA.length - 1].date)) {
      this.handleCalendarEnd();
    } else {
      this.handleDateOutOfCalendarRange();
    }
  }

  updateWorkingDayBadge(todayData) {
    if (todayData.workingDay !== "-") {
      this.workingDayBadge.textContent = `Working Day ${todayData.workingDay}`;
      this.workingDayBadge.classList.add("working-badge");
      this.workingDayBadge.classList.remove("holiday-badge");
    } else {
      this.workingDayBadge.textContent = "Holiday";
      this.workingDayBadge.classList.add("holiday-badge");
      this.workingDayBadge.classList.remove("working-badge");
    }
  }

  updateScheduleGrid(todayData) {
    const schedules = CLASS_SCHEDULES[todayData.workingDay];
    if (schedules) {
      this.renderSchedule(schedules);
    } else {
      this.showNoClasses(todayData.remarks || "Holiday");
    }
  }

  handleDateOutOfCalendarRange() {
    this.workingDayBadge.textContent = "N/A";
    this.workingDayBadge.className = "holiday-badge";
    this.scheduleGrid.innerHTML = `
          <div class="error-message">
              <p>The current date is outside the academic calendar range.</p>
          </div>
      `;
  }

  handleCalendarEnd() {
    this.workingDayBadge.textContent = "Calendar Ended";
    this.workingDayBadge.className = "holiday-badge";
    this.scheduleGrid.innerHTML = `
          <div class="error-message">
              <p>The academic calendar has ended. No schedules available.</p>
          </div>
      `;
  }

  renderCalendar(filter = "all") {
    let filteredData = [...CALENDAR_DATA];

    if (filter !== "all") {
      filteredData = filteredData.filter((entry) =>
        filter === "working"
          ? entry.status === "Working"
          : entry.status === "Holiday"
      );
    }

    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

    this.calendarBody.innerHTML = filteredData
      .map((entry) => {
        const rowClass = entry.status.toLowerCase();
        const statusClass =
          entry.status === "Holiday" ? "holiday" : "working-day";

        return `
                  <tr class="${rowClass}">
                      <td>${this.formatCalendarDate(entry.date)}</td>
                      <td>${entry.day}</td>
                      <td>${entry.workingDay || "-"}</td>
                      <td class="${statusClass}">${entry.status}</td>
                      <td>${entry.remarks || "-"}</td>
                  </tr>
              `;
      })
      .join("");
  }

  setupFilters() {
    this.calendarFilter.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;

        this.calendarFilter.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");

        this.renderCalendar(filter);
      }
    });
  }

  renderSchedule(schedule) {
    const scheduleHTML = schedule
      .map((slot) => this.createScheduleCard(slot))
      .join("");

    this.scheduleGrid.innerHTML = `
          <div class="schedule-container animate__animated animate__fadeIn">
              ${scheduleHTML}
          </div>
      `;
  }

  createScheduleCard(slot) {
    return `
          <div class="schedule-card animate__animated animate__fadeIn">
              <div class="schedule-time">
                  <i class="far fa-clock"></i>
                  <span>${slot.time}</span>
              </div>
              <h3 class="schedule-subject">${slot.subject}</h3>
              <div class="schedule-instructor">
                  <div class="instructor-avatar">
                      <i class="fas fa-user"></i>
                  </div>
                  <span>${slot.instructor}</span>
              </div>
          </div>
      `;
  }

  showNoClasses(reason) {
    this.scheduleGrid.innerHTML = `
          <div class="no-classes animate__animated animate__fadeIn">
              <i class="fas fa-coffee"></i>
              <h3>No Classes Today</h3>
              <p>${reason}</p>
              <p>Enjoy your break! 😉</p>
          </div>
      `;
  }

  formatDateToISO(date) {
    return date.toISOString().split("T")[0];
  }

  formatCalendarDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

class FactManager {
  constructor() {
    this.factText = document.getElementById("dailyFact");
    this.refreshButton = document.getElementById("refreshFact");
    this.init();
  }

  init() {
    this.refreshButton.addEventListener("click", () => this.updateFact());
    this.updateFact();
  }

  updateFact() {
    const randomFact =
      CONFIG.facts[Math.floor(Math.random() * CONFIG.facts.length)];
    this.factText.textContent = randomFact;
  }
}

// Image slider start
class GallerySlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [
      {
        image: "assets/memories.jpg",
        title: "Memories",
        description: "Mimli Ma'am",
      },
      {
        image: "assets/college-gate.jpg",
        title: "Main Gate",
        description: "College Gate",
      },
      {
        image: "/assets/pee-lab-2.jpg",
        title: "PEE LAB",
        description: "LAB - Experiment",
      },
      {
        image: "assets/pp-i.jpg",
        title: "PP-I",
        description: "Project",
      },
    ];

    this.track = document.getElementById("galleryTrack");
    this.dotsContainer = document.getElementById("galleryDots");
    this.init();
  }

  init() {
    this.createSlides();
    this.createDots();

    // Add event listeners
    document
      .querySelector(".gallery-button.prev")
      .addEventListener("click", () => this.prevSlide());
    document
      .querySelector(".gallery-button.next")
      .addEventListener("click", () => this.nextSlide());

    // Auto advance slides
    this.startAutoAdvance();

    // Pause auto-advance on hover
    const slider = document.getElementById("gallerySlider");
    slider.addEventListener("mouseenter", () => this.pauseAutoAdvance());
    slider.addEventListener("mouseleave", () => this.startAutoAdvance());
  }

  createSlides() {
    this.slides.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = "gallery-slide";
      slideElement.innerHTML = `
              <img src="${slide.image}" alt="${slide.title}" class="gallery-image">
              <div class="gallery-content">
                  <h3>${slide.title}</h3>
                  <p>${slide.description}</p>
              </div>
          `;
      this.track.appendChild(slideElement);
    });
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `gallery-dot${index === 0 ? " active" : ""}`;
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  updateDots() {
    const dots = this.dotsContainer.children;
    Array.from(dots).forEach((dot, index) => {
      dot.className = `gallery-dot${
        index === this.currentSlide ? " active" : ""
      }`;
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.track.style.transform = `translateX(-${index * 100}%)`;
    this.updateDots();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  startAutoAdvance() {
    this.autoAdvance = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoAdvance() {
    clearInterval(this.autoAdvance);
  }
}

// Initialize Gallery Slider
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new CalendarManager();
  new FactManager();
  new GallerySlider();
  const calendarManager = new CalendarManager();
});
