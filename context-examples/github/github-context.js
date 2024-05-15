/**
 * Source of the script included in github-context.json.
 * This contains the instructions to scrape github.com
 * and returns an object according to the github-context.json schema.
 * In case the instructions are not valid anymore, do:
 * 1. Update this script
 * 2. Minify the script function with https://minify-js.com/
 * 3. Copy the minified script body, i.e. without the function script(){} wrapper,
 *    and paste it in the github-context.json "script" property. Make sure to escape quotes!
 */
function script() {
  const postHandles = document.querySelectorAll("a.author");
  const postDates = document.querySelectorAll(
    "#discussion_bucket relative-time"
  );

  const title = document
    .querySelector("h1.gh-header-title :nth-child(1)")
    .textContent.trim()
    .replace("#", "");
  const number = document
    .querySelector("h1.gh-header-title :nth-child(2)")
    .textContent.trim()
    .replace("#", "");

  const state = document
    .querySelector(".State")
    .textContent.trim()
    .split("\n")[0];

  const opened = postDates[0].textContent.trim();
  const openedUTC = postDates[0].getAttribute("datetime");

  const author = postHandles[0].textContent.trim();
  const lastPostAuthor = postHandles[postHandles.length - 1].textContent.trim();
  const lastPostDate = postDates[postDates.length - 1].getAttribute("datetime");

  return {
    number,
    title,
    state,
    opened,
    openedUTC,
    author,
    lastPostAuthor,
    lastPostDate
  };
}
