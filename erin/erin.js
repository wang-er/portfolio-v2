var myFullpage = new fullpage('#fullpage', {

		});





const colors = ['#D32027','#FF8C42','#ef4a13']; //#ef4a13 #ffc430
const numLines = 1;
var currCount = numLines;
const texts = document.querySelectorAll("#textClip text");
const blobs = document.querySelectorAll("#background path");

function colorBlobs() {
	blobs.forEach(blob => {
        blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
    });
}

function nextIteration() {
	// Change the color of all the blobs
    colorBlobs();
    
    // Hide the old set of lines
    let startVal = currCount - numLines;
    if(startVal < 0) {
    	startVal = texts.length - numLines;
    }
    for(let i = startVal; i < startVal + numLines; i++) {
    	texts[i].style.display = "none";
    }


    // Show new set of lines
    for(let j = currCount; j < currCount + numLines; j++) {
    	texts[j].style.display = "block";
    	console.log("did I do it?");
    }
    currCount += numLines;
    if(currCount >= texts.length) {
    	currCount = 0;
    }

        // myFunction();
}


function myFunction() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.getElementById("screen-desc").appendChild(x);
}

// Since all of our blobs are using the same animation, we only
// need to listen to one of them
blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();




$( document ).ready(function() { 
  var tempWidth = $(document).width();

  if( tempWidth < 575) {
    pageSize = 3;
  } else if (tempWidth < 993 && tempWidth > 575 ) {
    pageSize = 4;
  } else {
    pageSize = 6;
  }
    
    pagesCount = $(".content").length;
    var currentPage = 1;
    
    /////////// PREPARE NAV ///////////////
    var nav = '';
    var totalPages = Math.ceil(pagesCount / pageSize);
    for (var s = 0; s< totalPages; s++){
        nav += '<li class="numeros"><a href="#">'+(s+1)+'</a></li>';
    }
    $(".pagination").append(nav);
    $(".numeros").first().addClass("active");
    //////////////////////////////////////

    showPage = function() {
        $(".content").hide(700).each(function(n) {
            if (n >= pageSize * (currentPage - 1) && n < pageSize * currentPage)
                $(this).show(700);
        });
    }
    showPage();


    $(".pagination li.numeros").click(function() {
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        currentPage = parseInt($(this).text());
        showPage();
    });
});
