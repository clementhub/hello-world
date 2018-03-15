var communes_bordeaux = ["Bordeaux", "Mérignac", "Pessac", "Talence", "Villenave-d'Ornon", "Saint-Médard-en-Jalles", "Bègles", "Gradignan", "Cenon", "Le Bouscat", "Eysines", "Lormont"];

function validation_commune(that) {
    if (communes_bordeaux.includes(that.value)) {
        document.getElementById("input-sections").style.display = "inline";
        document.getElementById("input-sections").value = "";
    } else {
        document.getElementById("input-sections").style.display = "none";
        document.getElementById("input-sections").value = "";
    }
}

function miseazero(that) {
    that.value = "";
}

// DATALIST LIST COMMUNES

// Get the <datalist> and <input> elements.
var dataList_communes = document.getElementById('liste-communes-test');
var input_communes = document.getElementById('input-communes');

// Create a new XMLHttpRequest.
var request_communes = new XMLHttpRequest();

// Handle state changes for the request.
request_communes.onreadystatechange = function(response) {
  if (request_communes.readyState === 4) {
    if (request_communes.status === 200) {
      // Parse the JSON
      var jsonOptions_communes = JSON.parse(request_communes.responseText);
  
      // Loop over the JSON array.
      jsonOptions_communes.forEach(function(item) {
        // Create a new <option> element.
        var option_communes = document.createElement('option');
        // Set the value using the item in the JSON array.
        option_communes.value = item;
        // Add the <option> element to the <datalist>.
        dataList_communes.appendChild(option_communes);
      });
      
      // Update the placeholder text.
      input_communes.placeholder = "Entrer votre commune";
    } else {
      // An error occured :(
      input_communes.placeholder = "Une erreur s'est produite";
    }
  }
};

// Update the placeholder text.
input_communes.placeholder = "Chargement...";

// Set up and make the request.
request_communes.open('GET','json/liste-communes-test.json', true);
request_communes.send();

// DATALIST LIST SECTIONS

// Get the <datalist> and <input> elements.
var dataList_section = document.getElementById('liste-sections-test');
var input_section = document.getElementById('input-sections');

// Create a new XMLHttpRequest.
var request_section = new XMLHttpRequest();

// Handle state changes for the request.
request_section.onreadystatechange = function(response) {
  if (request_section.readyState === 4) {
    if (request_section.status === 200) {
      // Parse the JSON
      var jsonOptions_section = JSON.parse(request_section.responseText);
  
      // Loop over the JSON array.
      jsonOptions_section.forEach(function(item) {
        // Create a new <option> element.
        var option_section = document.createElement('option');
        // Set the value using the item in the JSON array.
        option_section.value = item;
        // Add the <option> element to the <datalist>.
        dataList_section.appendChild(option_section);
      });
      
      // Update the placeholder text.
      input_section.placeholder = "Entrer votre section";
    } else {
      // An error occured :(
      input_section.placeholder = "Une erreur s'est produite";
    }
  }
};

// Update the placeholder text.
input_section.placeholder = "Chargement...";

// Set up and make the request.
request_section.open('GET','json/liste-sections-test.json', true);
request_section.send();

$('#commune').click(function () {

            if ( communes_bordeaux.includes($("#input-communes").val())) {
            window.open("PLU Bordeaux/1_Reglement pieces ecrites/1-Reglement par zone/"+$("#input-sections").val()+".pdf","_blank");
            }
            else {
            window.open("PLU/PLU "+$("#input-communes").val()+".pdf","_blank");
            }
        
});