var converter = new showdown.Converter();
// Function to get URL parameters
function getUrlParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

// Get specific parameter
const urls = getUrlParams();

let m2h = (a) => converter.makeHtml(a);
var s = (a) => document.querySelector(a);
async function fetchReadmeContent(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error fetching README content:", error);
    return null;
  }
}

fetchReadmeContent(urls.get('load')).then(
  (content) => {
    if (content !== null) {
      console.log((content = m2h(content)));
      s("#article").innerHTML = content;
    }
  }
);

// Display the parameter value
if (paramValue) {
  console.log(`Value of ${paramName}: ${paramValue}`);
} else {
  console.log(`Parameter ${paramName} not found in the URL.`);
}
