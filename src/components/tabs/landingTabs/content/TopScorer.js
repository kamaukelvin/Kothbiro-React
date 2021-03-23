import React, { useEffect, useState } from "react";
import { Table } from "antd";
import FirebaseService from "../../../../firebase/FirebaseService";
import BackToTop from "components/backToTop";
import { IoIosFootball } from "react-icons/io";

const columns = [
  {
    title: "Player Name",
    dataIndex: "player",
    key: "player",
  },
  {
    title: "",
    dataIndex: "score",
    key: "score",
    defaultSortOrder: "descend",
    // render: (tags) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return <IoIosFootball color={color} key={tag} />;
    //     })}
    //   </>
    // ),
  },
];

const testData = [
  {
    player: "Omondi",
    score: 5,
  },
  {
    player: "Player 2",
    score: 3,
  },
  {
    player: "Player 3",
    score: 9,
  },
];

// const dataa = [
//   {
//     key: "1",
//     team: "Mike",
//     p: 32,
//     w: 10,
//     d: 10,
//     gd: 12,
//     pts: "10 Downing Street",
//   },
// ];
const TopScorers = () => {
  const [topScorers, setTopScorers] = useState([]);
  const _fetchGroups = () => {
    FirebaseService.getAll().on("value", (snapshot) => {
      let groups = snapshot.val();
      let newGroupState = [];
      for (let data in groups) {
        let teams = groups[data].teams;

        console.log("THE TTTT", groups);
        newGroupState.push({
          group_name: groups[data].name,
          teams: teams,
        });
        setTopScorers(newGroupState);
      }
    });
  };
  useEffect(() => {
    _fetchGroups();
  }, []);

  console.log("xe statr", topScorers);
  return (
    <div>
      <BackToTop />

      <Table
        pagination={false}
        columns={columns}
        dataSource={testData}
        scroll="scroll"
        title={() => "All Time Top Scorers"}
      />
    </div>
  );
};

export default TopScorers;
