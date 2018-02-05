$(document).ready(() => {
  function getQuote () {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(function(data) {
      quote = data.quoteText;
      quoteUrl = data.quoteLink;
      if (data.quoteAuthor == '') {
        author = 'Unknown';
      } else {
        author = data.quoteAuthor;
      }
      $("#quote").hide().html(quote).fadeIn();
      $("#author").hide().html(author).fadeIn();
    })
    .fail(function(err) {
      console.log('Error: ' + err.status);
      $("#quote").html("There was an error! Try again!");
    });
  }

  getQuote ();

  $("#getQuote").on("click", function() {
    getQuote ();
    });

  $("#twitter").on("click", function() {
    var twtLink = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -" + author);
    window.open(twtLink,"_blank");
  });
})
