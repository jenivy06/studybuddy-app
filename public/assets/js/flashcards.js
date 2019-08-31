// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //english
    $(".change-english").on("click", function(event) {
      var id = $(this).data("id");
      var newEnglish = $(this).data("newenglish");
  
      var newSubjectEnglish = {
        english: newEnglish
      };
  
      // Send the PUT request.
      $.ajax("/api/flashcards/" + id, {
        type: "PUT",
        data: newSubjectEnglish
      }).then(
        function() {
          console.log("changed subject to", newEnglish);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    // Math
    $(".change-math").on("click", function(event) {
      var id = $(this).data("id");
      var newMath = $(this).data("newmath");
  
      var newSubjectMath = {
        math: newMath
      };
  
      // Send the PUT request.
      $.ajax("/api/flashcards/" + id, {
        type: "PUT",
        data: newSubjectMath
      }).then(
        function() {
          console.log("changed subject to", newMath);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    // language
    $(".change-language").on("click", function(event) {
        var id = $(this).data("id");
        var newLanguage = $(this).data("newlanguage");
    
        var newSubjectLanguage = {
          language: newLanguage
        };
    
        // Send the PUT request.
        $.ajax("/api/flashcards/" + id, {
          type: "PUT",
          data: newSubjectLanguage
        }).then(
          function() {
            console.log("changed subject to", newLanguage);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  