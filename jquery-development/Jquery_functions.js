$(document).ready(function(){
    $("button").dblclick(function(){                //html elements with hide function
        //$("h1").hide();
        //$("p").hide();
        //$("#heading2").hide();
        //$("*").hide();//all the elements disappears
        //$(this).hide(); //hide button itself
        $(":button").hide(); //hide the button 
    });
    
    $("p.line2").html("This line will show or hide after the click");
    $("ul li:first").css("background-color", "yellow");
    //$("[href]").html("Welcome to Google page");
    $("tr:odd").css("color", "grey");
    //$("a[target =='_blank']").css("color", "green");
    
    function message(){
      alert("You have visited Milk products");
    }

    //Single event
    //$("#milk").mouseup(message);  //mouseup
    
    //Adding multiple events in jQuery
    $("#milk").on({
         mouseenter: function(){
             $(this).css("background-color", "yellow");
             $(this).click(function(){
                alert("The color is changed");
             })
         },
         mouseleave: function(){
             $(this).css("background-color", "pink");
         },
         click: function(){
             $(this).css("background-color", "cyan");
         }
    });

    //hide - show a text
    $("#hidden").click(function(){
        $(".line2").hide(1000);
    });

    $("#visible").click(function(){
        $(".line2").show(1000);
    });


    //toggle an element
    $("#btn").click(function(){
        $(".line3").toggle(1000);
    });

    //FadeIn - div children
    $("#b1").click(function(){
        $("#one").fadeIn();
        $("#one > #two").fadeIn(4000);
        $("#two > #three").fadeIn(6000);
        $("#three > #four").fadeIn(8000);
    });

    //FadeOut in opposite direction
     $("#b2").click(function(){
        $("#one").fadeOut(8000);
        $("#one > #two").fadeOut(6000);
        $("#two > #three").fadeOut(4000);
        $("#three > #four").fadeOut();
    }); 

    //Fade Toggle
    $("#b3").click(function(){
        $("#one").fadeToggle(8000);
        $("#one > #two").fadeToggle(6000);
        $("#two > #three").fadeToggle(4000);
        $("#three > #four").fadeToggle();
    }); 

    //FadeTo with time and Opacity
    $("#b4").click(function(){
        $("#one").fadeTo(8000, 0.90);
        $("#one > #two").fadeTo(6000, 0.60);
        $("#two > #three").fadeTo(4000, 0.90);
        $("#three > #four").fadeTo(9000, 0.99);
    });

    //slides down
     $("#topbar1").click(function(){
        $("#panel").slideDown(1000);
    });
    //slides up
    $("#topbar2").click(function(){
        $("#panel").slideUp(1000);
    });
    //Toggles
    $("#topbar3").click(function(){
        $("#panel").slideToggle(1000);
    }); 
    //jQuery chaining
    $("#topbar4").click(function(){
        $("#panel").css("background","green")
        .slideUp(1000).slideDown(1000);
    });

    //draggable
    $("#drag").click(function(){
        $(function(){
            $("#drag").draggable();
        });
    });

    //Accordian menu
    $(function(){
        $("#accordion").accordion();
    });

    //jQuery get content
    $("#button1").click(function(){
        alert($("#milklist").text());
    })
    $("#button2").click(function(){
        alert($("#milklist").html());
    })
    //Get content value
    $("#getVal").click(function(){
        alert("Hey, this is " + $("#name").val());
    });

    //Get attribute value
    $("#image").click(function(){
        alert("Image: "+ $("#ref").attr("href"));
    });

    //jQuery Set content-text-html-value
    $("#resetText").click(function(){
        $("#text").text("Your Name:" );
    });
    $("#resetHtml").click(function(){
        $("#text").html("<b>Your Name: <input type=\"text\"</b>");
    });
    $("#resetVal").click(function(){
        $("#name").val("Bob Smith");
    });
    
    //jQuery set Attributes
    $("#ref2").click(function(){
        $("#ref2").attr("href", "http://www.gmail.com");
    });

    //jQuery Append and Prepend after or before 
    $("#addItem1").click(function(){
        $("#milklist").append("<li>Yogurt</li>");
    });
    $("#addItem2").click(function(){
        $("#milklist").prepend("<li>Cream</li>");
    });

    //insert text before or after
    $("#before").click(function(){
        $("img").before("<b>It's an Art</b>");
    });
    $("#after").click(function(){
        $("img").after("<b>It's an Art</b>");
    });

    //remove audio
    $("#remove").click(function(){
        $("#audioclip").remove();// or empty() to clear content
    });

    //remove a person(row) from table
    $("#person1").click(function(){
        $("#sarah").remove();
    });
    $("#person2").click(function(){
        $("#david").remove();
    });
    //remove sarah/david buttons
    $("#person2").click(function(){
        $("#person2").remove();
    });
    $("#person1").click(function(){
        $("#person1").remove();
    });

    //use CSSStyle
    $(".useCSS").click(function(){
        $("td").addClass("useCSSStyle");
    });
    //remove CSS class
    $(".removeCSS").click(function(){
        $("td").removeClass("useCSSStyle");
    });
    //ToggleCSS
    $(".toggleCSS").click(function(){
        $("td").toggleClass("useCSSStyle");
    });

    //Animate square using left, opacity, height properties
     $("#square1").click(function(){
        $("#square1").animate({left: '800px', opacity:0.55, height:"toggle", width:'60px'}, 1000);
    }) 
    //Animate to bigger size
    $("#square2").click(function(){
        $("#square2").animate({left: '800px', opacity:0.25,height:"+=200px", width:"+=200px"}, 1000);
    }) 

    //Queue functionality
    $("#square3").click(function(){
        $("#square3").animate({left: '400px', opacity:0.25}, 1000);
        $("#square3").animate({left: '600px', opacity:0.25}, 1000);
        $("#square3").animate({left: '800px', opacity:0.25}, 1000);
    }); 

    //Stop the animation
    $("#square4").click(function(){
        $("#square4").animate({left: '1500px', opacity:0.25}, 5000);
    });

    $(".stop").click(function(){
        $("#square4").stop();
            alert("The square stopped rolling!")
    });   

    //console output showing x and y co-ordinates values
    document.addEventListener('mousemove', function(event) {
     console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
     //console.log('Mouse X:', event.pageX, 'Mouse Y:', event.pageY);
     const coordinates = document.getElementById('coordinates');
    });

    //x and y co-ordinates display on html document on browser
     document.addEventListener('mousemove', function(event) {
         const x = event.clientX;
         const y = event.clientY;
         coordinates.textContent = `Mouse X: ${x}, Mouse Y: ${y}`;
     });


     //animation : mousemove event where the text moves with mouse movement
     const follower = document.querySelector('#heading2');

     document.addEventListener('mousedown', function(event) {
         const x = event.clientX;
         const y = event.clientY;
         follower.style.left = `${x}px`;
         follower.style.top = `${y}px`;
     });     
      
});