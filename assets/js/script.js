const ninaAssistant = document.getElementById("nina-assistant");
const ninaHover = document.getElementById("nina-hover");
const assistantCloseBtn = document.getElementById("assistant-close-btn");
const ninaChatCloseBtn = document.getElementById("nina-chat-close-btn");
const ninaChatBlock = document.getElementById('nina-chat-block');

//sm-nav 
const smallNavItem1 = document.getElementById("sm-nav-item1");
const smallNavItemList1 = document.getElementById("sm-nav-item-list1");

const smallNavItem2 = document.getElementById("sm-nav-item2");
const smallNavItemList2 = document.getElementById("sm-nav-item-list2");

const smallNavItem3 = document.getElementById("sm-nav-item3");
const smallNavItemList3 = document.getElementById("sm-nav-item-list3");

const smallNavItem4 = document.getElementById("sm-nav-item4");
const smallNavItemList4 = document.getElementById("sm-nav-item-list4");

const smallNavItem5 = document.getElementById("sm-nav-item5");
const smallNavItemList5 = document.getElementById("sm-nav-item-list5");

const smallNavItem6 = document.getElementById("sm-nav-item6");
const smallNavItemList6 = document.getElementById("sm-nav-item-list6");

//nina assistant
window.document.addEventListener("DOMContentLoaded", () => {
    ninaHover.style.display = "block";
});
assistantCloseBtn.addEventListener("click", () => {
  ninaHover.style.display = "none";
});

ninaAssistant.addEventListener('click',()=>{
  ninaChatBlock.style.display='block';
  ninaChatBlock.classList.add('in-amin')
});
ninaChatCloseBtn.addEventListener('click',()=>{
  ninaChatBlock.style.display='none';
});
// nina assistant end

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

smallNavItem3.addEventListener('mouseenter',()=>{
  smallNavItemList3.style.display='block';
});
smallNavItem3.addEventListener('mouseleave',()=>{
  smallNavItemList3.style.display='none';
});

smallNavItem4.addEventListener('mouseenter',()=>{
  smallNavItemList4.style.display='block';
});
smallNavItem4.addEventListener('mouseleave',()=>{
  smallNavItemList4.style.display='none';
});

smallNavItem5.addEventListener('mouseenter',()=>{
  smallNavItemList5.style.display='block';
});
smallNavItem5.addEventListener('mouseleave',()=>{
  smallNavItemList5.style.display='none';
});

smallNavItem6.addEventListener('mouseenter',()=>{
  smallNavItemList6.style.display='block';
});
smallNavItem6.addEventListener('mouseleave',()=>{
  smallNavItemList6.style.display='none';
});





