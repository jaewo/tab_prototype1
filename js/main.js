window.addEventListener("load", function(){
	/*
	var n=0;
	var name="";
	var menuLi=document.querySelectorAll("nav li");
	var info=document.querySelectorAll(".description");

	// menuLi.item(0).classList.add("on");
	menuLi[0].classList.add("on");
	// info.item(0).classList.add("active");
	info[0].classList.add("active");

	for(var i=0; i<menuLi.length; i++){
		menuLi[i].index=i; // index 값을 미리 지정합니다.

		menuLi[i].addEventListener("click", function(e){
			for(var j=0; j<menuLi.length; j++){
				menuLi[j].classList.remove("on");
				info[j].classList.remove("active");
			}

			e.currentTarget.classList.add("on");

			var n=e.currentTarget.index;
			// console.log("n : "+n);
			info[n].classList.add("active");
		});
	}
	*/

	var container=document.querySelector(".container");
	var tabs=document.querySelector("nav > ul");
	var menuLi=null;
	var info=null;
	var requestURL="../data/tab_info.json";
	var request=new XMLHttpRequest();
	var appendHtml="";

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key in data){
					// console.log(key+" : "+data[key]);
					// <li class="tab1"><a href="#">HTML</a></li>
					appendHtml+='<li class="'+key+'"><a href="#">'+data[key]+'</a></li>\n';

					// <div class="description HTML">subject : HTML</div>
					var description=document.createElement("div");
					description.setAttribute("class", "description "+data[key]);
					description.innerText="subject : "+data[key];
					container.appendChild(description);
				}
				// console.log("appendHtml : "+appendHtml);
				tabs.innerHTML=appendHtml;

				menuLi=document.querySelectorAll("nav li");
				info=document.querySelectorAll(".description");
				menuLi[0].classList.add("on");
				info[0].classList.add("active");

				for(var i=0; i<menuLi.length; i++){
					menuLi[i].index=i; // index 값을 미리 지정합니다.

					menuLi[i].addEventListener("click", function(e){
						for(var j=0; j<menuLi.length; j++){
							menuLi[j].classList.remove("on");
							info[j].classList.remove("active");
						}

						e.currentTarget.classList.add("on");

						var n=e.currentTarget.index;
						// console.log("n : "+n);
						info[n].classList.add("active");
					});
				}
			});
		}, 10);
	}
	init();
});