import EventApp from "@/components/EventApp";

const MOCK_EVENT = [
  {
    id: "string",
    title: "Quis lectus suspendisse",
    description: "imperdiet nullam orci pede venenatis non",
    startDate: "4/29/2022",
    endDate: "3/9/2022",
    image: "https://robohash.org/etfacerefugiat.png?size=50x50&set=set1",
    categories: ["Coding"],
  },
  {
    id: "string1",
    title:
      "pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
    description:
      "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy",
    startDate: "4/11/2022",
    endDate: "4/18/2022",
    image: "https://robohash.org/eaquedolorpariatur.png?size=50x50&set=set1",
    categories: ["Social"],
  },
  {
    id: "string2",
    title: "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
    description:
      "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    startDate: "7/15/2022",
    endDate: "10/14/2022",
    image: "https://robohash.org/dignissimossintanimi.png?size=50x50&set=set1",
    categories: ["Coding"],
  },
  {
    id: "string3",
    title:
      "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
    description:
      "ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
    startDate: "3/2/2022",
    endDate: "8/30/2022",
    image: "https://robohash.org/quosquasmollitia.png?size=50x50&set=set1",
    categories: ["Social"],
  },
  {
    id: "string4",
    title:
      "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
    description:
      "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    startDate: "4/29/2022",
    endDate: "3/9/2022",
    image: "https://robohash.org/etfacerefugiat.png?size=50x50&set=set1",
    categories: ["Coding"],
  },
];

const HomePage = () => <EventApp events={MOCK_EVENT} />;

export default HomePage;
