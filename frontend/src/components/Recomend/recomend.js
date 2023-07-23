import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
// import Form from "../Form/Form";
// import IncomeItem from "../IncomeItem/IncomeItem";
import "./reco.css";
function Recomend() {
  const { getIncomes, totalIncome, totalBalance } = useGlobalContext();
  // useEffect(() => {
  //   getIncomes();
  // }, []);
  const invest = (30 / 100) * totalIncome();
  const self = (20 / 100) * totalIncome();
  const expenses = (50 / 100) * totalIncome();
  const investb = (30 / 100) * totalBalance();
  const selfb = (20 / 100) * totalBalance();
  const expensesb = (50 / 100) * totalBalance();
  const stock = (20 * 100 * expensesb) / 10000;

  // const totalBalancee = totalBalance();
  // const [selectedCount, setSelectedCount] = useState(0);
  // const [splitValues, setSplitValues] = useState([]);

  // useEffect(() => {
  //   const initialSplitValues = Array(selectedCount).fill(
  //     totalBalancee / selectedCount
  //   );
  //   setSplitValues(initialSplitValues);
  // }, [selectedCount]);

  // const handleCheckboxChange = (index) => {
  //   const updatedSelectedCount =
  //     selectedCount + (splitValues[index] === 0 ? 1 : -1);
  //   setSelectedCount(updatedSelectedCount);
  // };

  return (
    <IncomeStyled>
      <InnerLayout>
        {/* <h1>RECCOMENDATION</h1> */}
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <h2 className="total-income">
          Balance: <span>${totalBalance()}</span>
        </h2>
        <h3>Total Income :</h3>
        <table>
          <tr>
            <th>Investment 30%</th>
            <th>Self Expense 20%</th>
            <th>Home Expenses 50%</th>
          </tr>

          <tr>
            <td>
              <span>${invest}</span>
            </td>
            <td>
              <span>${self}</span>
            </td>
            <td>
              <span>${expenses}</span>
            </td>
          </tr>
        </table>
        <h3>Balance:</h3>
        <table>
          <tr>
            <th>Investment 30%</th>
            <th>Self Expense 20%</th>
            <th>Home Expenses 50%</th>
          </tr>

          <tr>
            <td>
              <span>${investb}</span>
            </td>
            <td>
              <span>${selfb}</span>
            </td>
            <td>
              <span>${expensesb}</span>
            </td>
          </tr>
        </table>

        <h1>Have a look at Investment Options</h1>

        <div class="main">
          <aside class="left">
            <h3>Stocks</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
          <aside class="left">
            <h3>Ulips</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
          <aside class="left">
            <h3>Insurance</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
        </div>
        <div class="main">
          <aside class="left">
            <h3>Mutual fund</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
          <aside class="left">
            <h3>Fix Deposits</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <div>
              <a
                class="web"
                href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
                target="_blank"
              >
                text
              </a>
              <a
                class="youtube"
                href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
                target="_blank"
              >
                video
              </a>
            </div>
          </aside>
          <aside class="left">
            <h3>Crypto</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <div>
              <a
                class="web"
                href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
                target="_blank"
              >
                text
              </a>
              <a
                class="youtube"
                href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
                target="_blank"
              >
                video
              </a>
            </div>
          </aside>
        </div>
        <div class="main">
          <aside class="left">
            <h3>Gold</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
          <aside class="left">
            <h3>Real Estate</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>

            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
          <aside class="left">
            <h3>NPS</h3>
            <h4 class="money">
              you can invest 20% of balance :<span>${stock}</span>
            </h4>
            <h4 class="money">
              you can invest 30% of balance :<span>${stock}</span>
            </h4>
            <a
              class="web"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              text
            </a>
            <a
              class="youtube"
              href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
              target="_blank"
            >
              video
            </a>
          </aside>
        </div>

        {/* <h3>Choose Investment Options</h3>
        <div class="hero">
          <div class="checkBoxContainer">
            <div class="row">
              <input type="checkbox" value={stockid} onChange={"stock"} />{" "}
              Stocks
            </div>
            <div class="row">
              <input type="checkbox" value={MFid} onChange={"MF"} /> Mutual fund
              <label>
                <p class="ptag">Mutual FUND</p>
              </label>
            </div>
            <div class="row">
              <input type="checkbox" value={fdid} onChange={"fd"} /> FD
              <label>
                <p class="ptag">FD</p>
              </label>
            </div>
            <div class="row">
              <input type="checkbox" value={goldid} onChange={"gold"} /> Gold
              <label>
                <p class="ptag">Gold</p>
              </label>
            </div> */}
        {/* <div class="row">
              <label>
                <p>Stocks</p>
                <input type="checkbox" />
              </label>
            </div>
            <div class="row">
              <label>
                <p>Stocks</p>
                <input type="checkbox" />
              </label>
            </div>
            <div class="row">
              <label>
                <p>Stocks</p>
                <input type="checkbox" />
              </label>
            </div>
            <div class="row">
              <label>
                <p>Stocks</p>
                <input type="checkbox" />
              </label>
            </div>
            <div class="row">
              <label>
                <p>Stocks</p>
                <input type="checkbox" />
              </label>
            </div> */}
        {/* </div> */}
        {/* <div class="amar">
            <p>amar </p>
          </div>
        </div> */}
      </InnerLayout>
    </IncomeStyled>
  );
}
const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-green);
    }
  }
`;
export default Recomend;
