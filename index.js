const MAX = 5;
const data = [['n','2^n-1の個数','数列','最大値']];
for(let i = 1;i <= MAX;i++){
  data.push(col(i));
}
const table = document.createElement('table');
data.forEach((rowData)=>{
  const tr = document.createElement('tr');
  rowData.forEach((cellData)=>{
    const td = document.createElement('td');
    td.textContent = cellData;
    tr.append(td);
  });
  table.append(tr);
});
document.querySelector('#el').append(table);


function col(n){
  let i = n;
  if(i === 1)return [1,0,1,1];//[n,2^i-1_count,sq,max]
  const sq = [];
  let two = 0;
  let max = i;
  while(i !== 1){
    sq.push(i);
    if(Math.ceil(Math.log2(i + 1)) === Math.log2(i + 1))two++;
    if(i > max)max = i;
    if(i % 2 === 0){
      i /= 2;
    } else {
      i = (3 * i + 1) / 2;
    }
  }
  sq.push(1);
  return [n,two,sq,max];
}
