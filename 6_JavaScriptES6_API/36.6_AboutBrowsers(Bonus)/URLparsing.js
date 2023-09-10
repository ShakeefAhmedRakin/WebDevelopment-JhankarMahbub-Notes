url = "https://www.domain.com:80/page/content.php?id=123#top";

/*
PROTOCOL = https
HOSTNAME = www.domain.com
PORT = :80
PATHNAME = /page/content.php
SEARCH = ?id=123
HASH = #TOP
*/

// REDIRECTING

// REDIRECTS YOU TO THE URL BUT KEEPS THE HISTORY OF THE PREVIOUS URL.
window.location.assign(url);

// REDIRECTS TO THE URL AND REPLACES THE PREVIOUS HISTORY
window.location.replace(url);

window.location.href = url;

// RELOADS

window.location.reload;

// BROWSER JS FUNCTIONS

history;

history.back();

history.forward();

history.go(-3);
history.go(3);
