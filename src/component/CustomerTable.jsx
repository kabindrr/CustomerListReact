import React from "react";
import { FemaleAvatars, MaleAvatars, UnisexAvatars } from "./Avatars";

export const CustomerTable = ({ list }) => {
  return (
    <div className="mt-5 p-2 shadow-lg">
      <table className="table table-dark table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Gender</th>
            <th scope="col">Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                {item.gender === "m" ? (
                  <MaleAvatars />
                ) : item.gender === "f" ? (
                  <FemaleAvatars />
                ) : (
                  <UnisexAvatars />
                )}
              </td>
              <td>{item.gender}</td>
              <td
                style={{
                  color:
                    item.gender === "m"
                      ? "blue"
                      : item.gender === "f"
                      ? "pink"
                      : "yellow",
                }}
              >
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
