import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ input }) {
  let result = calculateInvestmentResults(input);
  return (
    <>
      <table id="result" className="center">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {result.map((obj) => {
            const total = obj.valueEndOfYear - obj.annualInvestment * obj.year;
            const totalInvestment = obj.valueEndOfYear - total;
            return (
              <tr key={obj.year}>
                <td>{obj.year}</td>
                <td>{formatter.format(obj.valueEndOfYear)}</td>
                <td>{formatter.format(obj.interest)}</td>
                <td>{formatter.format(total)}</td>
                <td>{formatter.format(totalInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
