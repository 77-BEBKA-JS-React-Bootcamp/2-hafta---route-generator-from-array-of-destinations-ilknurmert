tickets = [["JPN","PHL"],["BRA","UAE"],["USA","BRA"],["UAE","JPN"],["TR","USA"]];

flatArray=tickets.flat();

uniqueValues = Array.from(new Set(flatArray));

startPoint = uniqueValues[(uniqueValues.length-1)]

const route =[];
route.push(startPoint);

for(var j=0; j<tickets.length; j++){
  for(var i=0; i<tickets.length; i++){
  if(tickets[i][0] === startPoint){
    route.push(tickets[i][1]);
    startPoint = tickets[i][1];
    }
  }
}
console.log(route);