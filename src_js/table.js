
function showTables(buttonNumber) {
  // Fetch data from the json file
  fetch('https://gavg0.github.io/firefox-startpage/src_js/links.json')
    .then(response => response.json())
    .then(data => {
      // Create a class of the list links
      class List {
        constructor(title, link, table) {
          this.title = title;
          this.link = link;
          this.table = table;
        }
      }

      // Clear the selected tab
      document.getElementById("table_button1").classList.remove("bg-secondary");
      document.getElementById("table_button1").classList.remove("text-black");
      document.getElementById("table_button2").classList.remove("bg-secondary");
      document.getElementById("table_button2").classList.remove("text-black");
      document.getElementById("table_button3").classList.remove("bg-secondary");
      document.getElementById("table_button3").classList.remove("text-black");
      document.getElementById("table_button4").classList.remove("bg-secondary");
      document.getElementById("table_button4").classList.remove("text-black");

      // Set the selected tab
      switch (buttonNumber) {
        case 0:
          document.getElementById("table_button1").classList.add("bg-secondary");
          document.getElementById("table_button1").classList.add("text-black");
          break;
        case 1:
          document.getElementById("table_button2").classList.add("bg-secondary");
          document.getElementById("table_button2").classList.add("text-black");
          break;
        case 2:
          document.getElementById("table_button3").classList.add("bg-secondary");
          document.getElementById("table_button3").classList.add("text-black");
          break;
        case 3:
          document.getElementById("table_button4").classList.add("bg-secondary");
          document.getElementById("table_button4").classList.add("text-black");
          break;
      }

      // Create an array to store the list links
      var selected_List = [];

      // Loop through the data and store the selected list links
      for (let i = 0; i < data.length; i++) {
        if (data[i].table === buttonNumber) {
          selected_List.push(new List(data[i].title, data[i].link, data[i].table));
        }
      }

      // Clear the innerHTML of the test element
      document.getElementById("test0").innerHTML = "";
      document.getElementById("test1").innerHTML = "";
      document.getElementById("test2").innerHTML = "";
      document.getElementById("test3").innerHTML = "";
      document.getElementById("ul0").classList.remove("hidden");
      document.getElementById("ul1").classList.remove("hidden");
      document.getElementById("ul2").classList.remove("hidden");
      document.getElementById("ul3").classList.remove("hidden");

      if(selected_List.length < 5) {
        document.getElementById("ul3").classList.add("hidden");
        document.getElementById("ul2").classList.add("hidden");
        document.getElementById("ul1").classList.add("hidden");
      } else if(selected_List.length < 10) {
        document.getElementById("ul3").classList.add("hidden");
        document.getElementById("ul2").classList.add("hidden");
      } else if(selected_List.length < 15) {
        document.getElementById("ul3").classList.add("hidden");
      }
      
      // Loop through the selected list links and display them
      for (let i = 0; i < selected_List.length; i++) {
        document.getElementById("test0").innerHTML += "<a href='" + selected_List[i].link + "'>" + selected_List[i].title + "</a>";
        if(i > 3) {
          break;
        }
      }
      for (let i = 5; i < selected_List.length; i++) {
        document.getElementById("test1").innerHTML += "<a href='" + selected_List[i].link + "'>" + selected_List[i].title + "</a>";
        if(i > 8) {
          break;
        }
      }
      for (let i = 10; i < selected_List.length; i++) {
        document.getElementById("test2").innerHTML += "<a href='" + selected_List[i].link + "'>" + selected_List[i].title + "</a>";
        if(i > 13) {
          break;
        }
      }
      for (let i = 15; i < selected_List.length; i++) {
        document.getElementById("test3").innerHTML += "<a href='" + selected_List[i].link + "'>" + selected_List[i].title + "</a>";
        if(i > 18) {
          break;
        }
      }
    });
}

window.onload = function() {
  showTables(0);
}