console.log("hello");
// to redirect and download pdf
jQuery(document).ready(function($) {
    $('a[href$=".pdf"]')
    .attr('download', '')
    .attr('target', '_blank');
});

// to display api github

searchBtnEl = $('#git')
var blankSpace = $('#test')

function locationLoad() {

  blankSpace.empty()
  var gitUrl = 'https://api.github.com/users/davelarde/repos'

  console.log("gitUrl")

  fetch(gitUrl, {

  }).then(function (response) {
    return response.json()

  })
    .then(function (data) {
      console.log(data)
      var gitKey = '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' + data.query.search[0].title

      fetch(gitKey, {

      })
        .then(function (gitResponse) {
          return gitResponse.json()

        })
        .then(function (wikiData) {
          var pageKey = data.query.search[0].pageid
          console.log(gitData.query.pages[pageKey].extract)
          popularEl.append('<h2>' + searchTextEl.val() + '</h2>')
          popularEl.append('<p class ="text-size" >' + gitData.query.pages[pageKey].extract + '</p>')
          // descriptionEl.text(wikiData.query.pages[pageKey].extract)
        })
    })