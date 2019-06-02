---
---
(function(max) {

  let id, requested = window.location.pathname.substr(1);

  if (requested) {
    id = requested;
  } else {
    id = Math.floor(Math.random() * max) + 1;
  }

  history.replaceState(null, null, id);

  function error(object) {
    alert("There was an error getting your chicken fact.  Sorry about that.");
    console.log(object);
  }

  function applyFact(data) {
    document.querySelector("q").innerText = data.fact;
    document.querySelector("article a").setAttribute("href", data.source);
  }

  fetch(`/api/v1/facts/${id}.json`)
    .then(function(response) {
      if (response.status !== 200) {
        error(response);
        return;
      }

      response.json().then(function(data) {
        applyFact(data);
      });
    })
    .catch(function(err) {
      error(err);
    });
})({{ site.posts | size }});
