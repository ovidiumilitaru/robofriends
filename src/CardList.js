import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

// const CardList = ({ robots }) => {
//   const cardComponent = robots.forEach(robot => {
//     return <Card id={robot.id} name={robot.name} email={robot.email} />;
//   });
//   return <div>{cardComponent}</div>;
// };

export default CardList;
