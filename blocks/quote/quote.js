export default async function decorate(block) {
  const [quote, author] = block.children;
  block.innerHTML = `<blockquote>${quote.innerText}</blockquote><div class=author>Author: ${author.innerText}</div>`
}