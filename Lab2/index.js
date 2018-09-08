const addTrToTable = (table) => {
  const row = document.createElement('tr');
  table.appendChild(row);
};

const addTdToTable = (table, row, colspan, rowspan) => {
  const td = document.createElement('td');
  if (colspan) td.setAttribute('colspan', colspan);
  if (rowspan) td.setAttribute('rowspan', rowspan);
  table.children[row].appendChild(td);
};

const createTable = (captionText) => {
  const table = document.createElement('table');
  const caption = document.createElement('caption');
  caption.innerText = captionText;
  table.appendChild(caption);
  return table;
};

const tablesCreators = [
  (table) => {
    let curRow = 1;
    new Array(7).fill(null).forEach((elem, i) => {
      addTrToTable(table);
      addTdToTable(table, curRow, 7-i, 0);
      if (i !== 0) {
        addTdToTable(table, curRow++, 0, 7-i);
      } else curRow++;
    });
    return table;
  },
  
  (table) => {
    let curRow = 1;
    new Array(7).fill(null).forEach((elem, i) => {
      addTrToTable(table);
      addTdToTable(table, curRow, 6-i, 0);
      if (i !== 6)addTdToTable(table, curRow++, 0, 7-i);
    });
    return table;
  },
  
  (table) => {
    addTrToTable(table);
    new Array(5).fill(null).forEach((elem, j) => {
      let count = j % 2 ? 3 : 4;
      addTrToTable(table);
      for (let i = 0 ; i < count ; i++) addTdToTable(table, j+2, 0, 2);
    });
    
    addTrToTable(table);
    for (let i = 0 ; i < 7 ; i++) {
      if (i % 2) {
        addTdToTable(table, 1, 0, 2);
        addTdToTable(table, 7);
      } else {
        addTdToTable(table, 1);
      }
    }
    
    return table;
  },
  
  (table) => {
    const diff = [[3, 1], [1, 3], [2, 2]];
    
    new Array(7).fill(null).forEach((elem, i) => {
      let k = i%3;
    addTrToTable(table);
    addTdToTable(table, i+1, diff[k][0]);
    addTdToTable(table, i+1, 3);
    addTdToTable(table, i+1, diff[k][1]);
    });
    
    return table;
  }
];

for (let i = 0 ; i < 4 ; i++) {
  const table = tablesCreators[i](createTable('Table' + (i+1)));
  document.body.appendChild(table);
}