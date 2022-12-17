var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {

    for (tablink of tablinks) {
        //  It will remove active- link classname from all the tab
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        //  It will remove active- tab classname from all the tab
        tabcontent.classList.remove("active-tab");
    }


    //   -----Now Display the content after click on tab-----
          // now display the active color
   event.currentTarget.classList.add("active-link");
      //Now Display the Content
      document.getElementById(tabname).classList.add("active-tab");

}

//   code for Open menu and close menu
  var sidemenu = document.getElementById("sidemenu");

  const Openmenu = ()=>{
    // when right will be 0 , it's visiable
    sidemenu.style.right = "0";
  }
  const Closemenu = ()=>{
    sidemenu.style.right = '-200px';
  }

  