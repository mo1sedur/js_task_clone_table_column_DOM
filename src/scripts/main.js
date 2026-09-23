'use strict';

const table = document.querySelector('table');
const columnValues = Array.from(table.rows).map(row => row.cells[1]?.textContent);

function addColumnToTable(table, columnData) {
  const headText = columnData[0];
  const bodyTexts = columnData.slice(1, -1);
  const footText = columnData[columnData.length - 1];

  const headRow = table.tHead?.rows[0];
  if (headRow) {
    const th = document.createElement('th');
    th.textContent = headText;
    headRow.append(th); 
  }

  const bodyRows = table.tBodies[0]?.rows || [];
  bodyTexts.forEach((text, index) => {
    if (bodyRows[index]) {
      const td = document.createElement('td');
      td.textContent = text;
      bodyRows[index].append(td); 
    }
  });

  const footRow = table.tFoot?.rows[0];
  if (footRow) {
    const td = document.createElement('td');
    td.textContent = footText;
    footRow.append(td); 
  }
}

addColumnToTable(table, columnValues);