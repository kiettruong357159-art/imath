(function (){
'use strict';
const toggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-primary-nav]');
const submenuToggles=document.querySelectorAll('[data-submenu-toggle]');
const backTop=document.querySelector('[data-back-top]');
const postToc=document.querySelector('[data-post-toc]');
const randomOwl=document.querySelector('[data-random-owl]');
const headerSearch=document.querySelector('[data-header-search]');
if(randomOwl){
const owlSources=(randomOwl.dataset.owlSources||'').split('|').filter(Boolean);
if(owlSources.length){
let previousOwl='';
try {
previousOwl=window.sessionStorage.getItem('im26HeaderOwl')||'';
} catch (error){
previousOwl='';
}
const choices=owlSources.filter(function (source){
return source!==previousOwl;
});
const nextOwl=choices[Math.floor(Math.random() * choices.length)]||owlSources[0];
randomOwl.src=nextOwl;
try {
window.sessionStorage.setItem('im26HeaderOwl', nextOwl);
} catch (error){
}}
}
if(toggle&&nav){
toggle.addEventListener('click', function (){
const open=nav.classList.toggle('is-open');
toggle.setAttribute('aria-expanded', String(open));
toggle.setAttribute('aria-label', open ? 'Đóng menu điều hướng':'Mở menu điều hướng');
toggle.textContent=open ? '×':'☰';
});
nav.addEventListener('click', function (event){
if(event.target.closest('a')){
nav.classList.remove('is-open');
toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-label', 'Mở menu điều hướng');
toggle.textContent='☰';
}});
}
document.addEventListener('keydown', function (event){
if(event.key!=='Escape') return;
if(nav&&nav.classList.contains('is-open')){
nav.classList.remove('is-open');
toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-label', 'Mở menu điều hướng');
toggle.textContent='☰';
toggle.focus();
}
submenuToggles.forEach(function (button){
const dropdown=button.closest('.im26-nav__dropdown');
if(dropdown&&dropdown.classList.contains('is-open')){
dropdown.classList.remove('is-open');
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', button.dataset.openLabel||'Mở menu con');
button.blur();
}});
if(nav) nav.querySelectorAll('details[open]').forEach(function (details){ details.open=false; });
});
submenuToggles.forEach(function (submenuToggle){
submenuToggle.addEventListener('click', function (){
const dropdown=submenuToggle.closest('.im26-nav__dropdown');
if(!dropdown){
return;
}
const open=dropdown.classList.toggle('is-open');
const openLabel=submenuToggle.dataset.openLabel||'Mở menu con';
const closeLabel=submenuToggle.dataset.closeLabel||'Đóng menu con';
submenuToggle.setAttribute('aria-expanded', String(open));
submenuToggle.setAttribute('aria-label', open ? closeLabel:openLabel);
});
});
const toolMenu=document.getElementById('im26-tool-submenu');
if(toolMenu){
const groups=Array.from(toolMenu.querySelectorAll('.im26-tool-submenu__group'));
const desktopMenu=window.matchMedia('(min-width: 901px)');
const dropdown=toolMenu.closest('.im26-nav__dropdown');
const selectGroup=function (selected){
groups.forEach(function (group){ group.open=group===selected; });
};
const positionMenu=function (){
if(!desktopMenu.matches){
toolMenu.style.removeProperty('left');
return;
}
const anchor=dropdown.getBoundingClientRect();
const left=Math.max(16, Math.min(anchor.left - 214, document.documentElement.clientWidth - 536));
toolMenu.style.left=(left - anchor.left) + 'px';
if(!groups.some(function (group){ return group.open; })) selectGroup(groups[0]);
};
groups.forEach(function (group){
const summary=group.querySelector('summary');
summary.addEventListener('mouseenter', function (){
if(desktopMenu.matches) selectGroup(group);
});
summary.addEventListener('focus', function (){
if(desktopMenu.matches) selectGroup(group);
});
summary.addEventListener('click', function (event){
if(desktopMenu.matches){
event.preventDefault();
selectGroup(group);
}});
});
dropdown.addEventListener('mouseenter', positionMenu);
dropdown.addEventListener('focusin', positionMenu);
window.addEventListener('resize', positionMenu);
positionMenu();
}
if(headerSearch){
const searchToggle=headerSearch.querySelector('[data-search-toggle]');
const searchPanel=headerSearch.querySelector('[data-search-panel]');
const searchField=headerSearch.querySelector('[data-search-field]');
if(searchToggle&&searchPanel){
const closeSearch=function (){
headerSearch.classList.remove('is-open');
searchPanel.hidden=true;
searchToggle.setAttribute('aria-expanded', 'false');
};
searchToggle.addEventListener('click', function (){
const willOpen = !headerSearch.classList.contains('is-open');
if(!willOpen){
closeSearch();
return;
}
headerSearch.classList.add('is-open');
searchPanel.hidden=false;
searchToggle.setAttribute('aria-expanded', 'true');
window.setTimeout(function (){
if(searchField){
searchField.focus();
}}, 0);
});
document.addEventListener('click', function (event){
if(!headerSearch.contains(event.target)){
closeSearch();
}});
document.addEventListener('keydown', function (event){
if('Escape'===event.key&&headerSearch.classList.contains('is-open')){
closeSearch();
searchToggle.focus();
}});
}}
if(backTop){
const updateBackTop=function (){
backTop.classList.toggle('is-visible', window.scrollY > 500);
};
window.addEventListener('scroll', updateBackTop, { passive: true });
backTop.addEventListener('click', function (){
window.scrollTo({ top: 0, behavior: 'smooth' });
});
updateBackTop();
}
if(postToc){
const tocButton=postToc.querySelector('[data-post-toc-toggle]');
const tocList=postToc.querySelector('[data-post-toc-list]');
if(tocButton&&tocList){
tocButton.addEventListener('click', function (){
const willHide = !tocList.hidden;
tocList.hidden=willHide;
tocButton.textContent=willHide ? '[ hiện ]':'[ ẩn ]';
});
}}
}());
