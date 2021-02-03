const items = [
      {name : 'sundar1', address: 'patna1', age:10},
      {name : 'sundar2', address: 'patna2', age:30},
      {name : 'sundar3', address: 'patna3', age:20},
      {name : 'sundar4', address: 'patna4', age:50},
      ]

const hhh = items.every((item) => {
   return item.age<=50
})

const ggg = items.some((item) => {
   return item.age<=50
})

const total = items.reduce((currentTotal,item) => {
                           return item.age + currentTotal
                           },0)

const aaa = items.find((item) => {
  return item.name === 'sundar1';
})

items.forEach((item) => { console.log(item.name); })

const filterdata = items.filter((item) =>{
                                return  item.age<30
                                })

console.log('---',aaa,'----',hhh,'-------',total,'----------------',ggg,'-----------------',filterdata)


