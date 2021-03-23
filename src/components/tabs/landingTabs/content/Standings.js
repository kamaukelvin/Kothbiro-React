import React, { useEffect, useState } from "react";
import { Table } from "antd";
import FirebaseService from "../../../../firebase/FirebaseService";
import BackToTop from "components/backToTop";

const columns = [
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "P",
    dataIndex: "p",
    key: "p",
  },
  {
    title: "W",
    dataIndex: "w",
    key: "w",
  },
  {
    title: "D",
    dataIndex: "d",
    key: "d",
  },
  {
    title: "GD",
    dataIndex: "gd",
    key: "gd",
  },
  {
    title: "PTS",
    dataIndex: "pts",
    key: "pts",
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
const Standings = () => {
  const [groups, setGroups] = useState([]);
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
        setGroups(newGroupState);
      }
    });
  };
  useEffect(() => {
    _fetchGroups();
  }, []);

  console.log("xe statr", groups);
  return (
    <div>
      <BackToTop />
      {groups.map((group, i) => (
        <Table
          pagination={false}
          columns={columns}
          //   dataSource={dataa}
          scroll="scroll"
          title={() => `${group.group_name}`}
        />
      ))}
    </div>
  );
};

export default Standings;
