import React from 'react'

const data = [
    {region: "US",model: "A",sales: 150,},
    {region: "US",model: "B",sales: 120,},
    {region: "US",model: "C",sales: 350,},
    {region: "EU",model: "A",sales: 200,},
    {region: "EU",model: "B",sales: 100,},
    {region: "EU",model: "C",sales: 250,},
    {region: "CA",model: "A",sales: 200,},
    {region: "CA",model: "B",sales: 100,},
    {region: "CA",model: "C",sales: 230,},
    {region: "CA",model: "D",sales: 400,},
];

export default function Table() {

  const headers = Object.keys(data[0]);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = { totalSales: 0, items: [] };
    }
    acc[item.region].totalSales += item.sales;
    acc[item.region].items.push(item);
    return acc;
  }, {});

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([region, { totalSales, items }]) => (
            <React.Fragment key={region}>
              <tr>
                <td>{region}</td>
                <td>sum</td>
                <td>{totalSales}</td>
              </tr>
              {items.map((item, index) => (
                <tr key={index}>
                  {headers.map((header) => (
                    <td key={header}>{item[header]}</td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
