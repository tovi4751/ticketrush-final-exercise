// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה רגילה

function maxTickets(isMember) {
  // חברת מועדון מוגבלת עד 4 כרטיסים, לקוחה רגילה עד 8
  return isMember ? 4 : MAX_TICKETS;
}

function calcTotal(qty, isMember = false) {
  const max = maxTickets(isMember);
  
  // בדיקת תקינות: אם הכמות קטנה מ-1 או גדולה מהמכסה המותרת, מחזירים null
  if (qty < 1 || qty > max) {
    return null;
  }
  
  // מחיר כרטיס: 280 ₪ לחברת מועדון (20% הנחה על 350), 350 ₪ לרגילה[cite: 7]
  const ticketPrice = isMember ? 280 : TICKET_PRICE;
  
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, maxTickets, calcTotal };
}