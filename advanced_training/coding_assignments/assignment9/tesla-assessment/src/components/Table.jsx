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
    const salesByRegion = data.reduce((acc, item) => {
        if (!acc[item.region]) {
            acc[item.region] = 0;
        }
        acc[item.region] += item.sales;
        return acc;
    }, {});

    console.log(salesByRegion);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => {
                return <th className='table-header' key={header}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        {headers.map((header) => {
                            return <td key={header}>{item[header]}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
