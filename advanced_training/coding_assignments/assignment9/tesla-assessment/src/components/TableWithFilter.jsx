import React, { useState, useMemo } from 'react'

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

export default function TableWithFilter() {

  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedModel, setSelectedModel] = useState('all');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const regions = ['all', ...new Set(data.map(item => item.region))];
  const models = ['all', ...new Set(data.map(item => item.model))];

  const filteredData = useMemo(() => {
    return data.filter(item => 
      (selectedRegion === 'all' || item.region === selectedRegion) &&
      (selectedModel === 'all' || item.model === selectedModel)
    );
  }, [selectedRegion, selectedModel]);

  const headers = Object.keys(data[0]);

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = { totalSales: 0, items: [] };
    }
    acc[item.region].totalSales += item.sales;
    acc[item.region].items.push(item);
    return acc;
  }, {});

  return (
    <div>
      <div>
        <label>
          Filter by Region:
          <select value={selectedRegion} onChange={handleRegionChange}>
            {regions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label>
          Filter by Model:
          <select value={selectedModel} onChange={handleModelChange}>
            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([region, {items}]) => (
            <React.Fragment key={region}>
              {items.map((item, index) => (
                <tr key={index}>
                  {headers.map(header => (
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
