// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
<<<<<<< HEAD
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה רגילה
=======
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס
>>>>>>> origin/dana/promo

function maxTickets(isMember) {
  // חברת מועדון מוגבלת עד 4 כרטיסים, לקוחה רגילה עד 8
  return isMember ? 4 : MAX_TICKETS;
}

<<<<<<< HEAD
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
=======
function calcTotal(qty, isStudent) {
  const ticket = isStudent ? TICKET_PRICE * (1 - STUDENT_DISCOUNT) : TICKET_PRICE;
  return qty * (ticket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
>>>>>>> origin/dana/promo
