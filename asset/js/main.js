window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll(".nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-content");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;	
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});

let menuIteam = document.querySelector('.burger');
let menuMobile = document.querySelector('.header__list');

menuIteam.addEventListener('click', function(){
	this.classList.toggle('active');
	menuMobile.classList.toggle('show');
});

let listMenu = document.querySelector('.menu-con');
let susbMenu= document.querySelector('.susb-menu');
	listMenu.addEventListener('click', function(){
	susbMenu.classList.toggle('right')
	});

	let searchIcon = document.querySelector('.search--icon');
	let fromSearch = document.querySelector('.from__search');

		searchIcon.addEventListener('click', function(){
			fromSearch.classList.toggle('left');
		})