'use strict';

const table = document.querySelector('.field');
let rowQuantity = table.rows.length;
let columnQuantity = table.rows[0].cells.length;
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  const row = table.rows[0].cloneNode(true);

  table.append(row);

  rowQuantity++;

  if (rowQuantity >= 10) {
    appendRowBtn.setAttribute('disabled', '');
  } else {
    removeRowBtn.removeAttribute('disabled');
    appendRowBtn.removeAttribute('disabled');
  }
});

removeRowBtn.addEventListener('click', () => {
  table.rows[rowQuantity - 1].remove();
  rowQuantity--;

  if (rowQuantity <= 2) {
    removeRowBtn.setAttribute('disabled', '');
  } else {
    appendRowBtn.removeAttribute('disabled');
    removeRowBtn.removeAttribute('disabled');
  }
});

appendColumnBtn.addEventListener('click', () => {
  [...table.rows].forEach((row) => {
    const cell = document.createElement('td');

    row.append(cell);
  });
  columnQuantity++;

  if (columnQuantity >= 10) {
    appendColumnBtn.setAttribute('disabled', '');
  } else {
    removeColumnBtn.removeAttribute('disabled');
    appendColumnBtn.removeAttribute('disabled');
  }
});

removeColumnBtn.addEventListener('click', () => {
  [...table.rows].forEach((row) => {
    row.lastElementChild.remove();
  });
  columnQuantity--;

  if (columnQuantity <= 2) {
    removeColumnBtn.setAttribute('disabled', '');
  } else {
    appendColumnBtn.removeAttribute('disabled');
    removeColumnBtn.removeAttribute('disabled');
  }
});
