function ticketCounter(ticket){
    if(ticket<0)
        return "Invalid input"
    const totalPrice=ticket*120
    return totalPrice-(500+(8*50))
}
const ticket=93
const result=ticketCounter(ticket);
console.log(result);