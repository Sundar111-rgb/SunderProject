const numbers = {"UDFDATE01": "UDFDATE01", 
                 "UDFDATE02": "UDFDATE02", 
                 "UDFDATE03": "UDFDATE03", 
                 "UDFDATE04": "UDFDATE04", 
                 "UDFDATE05": "UDFDATE05", 
                 "UDFNUM01": "UDFNUM01", 
                 "UDFNUM02": "UDFNUM02", 
                 "UDFNUM03": "UDFNUM03", 
                 "UDFNUM04": "UDFNUM04", 
                 "UDFNUM05": "UDFNUM05", 
                 "UDFSTRING01": "UDFSTRING01", 
                 "UDFSTRING02": "UDFSTRING02", 
                 "UDFSTRING03": "UDFSTRING03", 
                 "UDFSTRING04": "UDFSTRING04", 
                 "UDFSTRING05": "UDFSTRING05", 
                 "UDFSTRING06": "UDFSTRING06", 
                 "UDFSTRING07": "UDFSTRING07", 
                 "UDFSTRING08": "UDFSTRING08", 
                 "UDFSTRING09": "UDFSTRING09", 
                 "UDFSTRING10": "UDFSTRING10"
                };

const objectArray = Object.entries(numbers);

objectArray.forEach(([key, value]) => {
 console.log(key); 
 console.log(value); 
});

 const hhh = objectArray.map((val,i) => {
   return val
 })

 console.log(hhh);
