// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap
//= require jquery
//= require jquery_ujs
//= require_tree .
var boardsOpen = false;
var sortOpen = false;
var settingsOpen = false;

/*function create(htmlStr) {
    var frag = document.createDocumentFragment(),
    temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}*/

function openBoards()
{

}

function openSort()
{
	if(sortOpen == false)
	{
		var navbar = document.getElementById("verticalContainer");
		var sortID = navbar.getElementsByClassName("dropItem");
		var item = sortID[1].getElementsByClassName("item");

		//Add Color option
		var par = document.createElement("p");
		var text = document.createTextNode("Color");
		par.appendChild(text);
		item[0].appendChild(par);
		//Add Due Date Option
		par = document.createElement("p");
		text = document.createTextNode("Due Date");
		par.appendChild(text);
		item[1].appendChild(par);
		//Add Importance Option
		par = document.createElement("p");
		text = document.createTextNode("Importance");
		par.appendChild(text);
		item[2].appendChild(par);
		//Add Name Option
		par = document.createElement("p");
		text = document.createTextNode("Name");
		par.appendChild(text);
		item[3].appendChild(par);	

		
		sortOpen = true;
	}
	else if(sortOpen == true)
	{

		sortOpen = false;
	}
}

/*
var fragment = create('<div>Hello!</div><p>...</p>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);
*/
