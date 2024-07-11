const ninaAssistant = document.getElementById("nina-assistant");
const ninaHover = document.getElementById("nina-hover");
const assistantCloseBtn = document.getElementById("assistant-close-btn");

const smallNavItem1 = document.getElementById("sm-nav-item1");
const smallNavItemList1 = document.getElementById("sm-nav-item-list1");

const smallNavItem2 = document.getElementById("sm-nav-item2");
const smallNavItemList2 = document.getElementById("sm-nav-item-list2");

//nina assistant
window.document.addEventListener("DOMContentLoaded", () => {
    ninaHover.style.display = "block";
});
assistantCloseBtn.addEventListener("click", () => {
  ninaHover.style.display = "none";
});
// nina assistant 

// nav items start
smallNavItem1.addEventListener('mouseenter',()=>{
  smallNavItemList1.style.display='block';
});
smallNavItem1.addEventListener('mouseleave',()=>{
  smallNavItemList1.style.display='none';
});

smallNavItem2.addEventListener('mouseenter',()=>{
  smallNavItemList2.style.display='block';
});
smallNavItem2.addEventListener('mouseleave',()=>{
  smallNavItemList2.style.display='none';
});





