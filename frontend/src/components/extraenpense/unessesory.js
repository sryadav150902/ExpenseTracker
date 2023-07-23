import { useEffect, useState } from "react";

export default function DataFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Expense");
        setData(data.data);
      });
  }, []);
  return (
    <div className="tablee">
      <table>
        <tr>
          <th>title</th>
          <th>amount</th>
          <th>category</th>
          <th>date</th>
        </tr>
        {data.map((i) => {
          if (
            i.category === "unwanted" ||
            i.category === "others" ||
            i.category === "subscriptions" ||
            i.category === "clothing" ||
            i.category === "takeaways"
          ) {
            return (
              <tr>
                <td>{i.title}</td>
                <td>{i.amount}</td>
                <td>{i.category}</td>
                <td>{i.date}</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}
