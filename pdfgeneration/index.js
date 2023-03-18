const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();
const websiteName = prompt('enter the website you want to convert as pdf?');
(async () => {
  console.log(`please wait while we fetch the requested page: ${websiteName}!`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.coverage.startJSCoverage()
  await page.coverage.startCSSCoverage()
  await page.setViewport({
    width: 1200,
    height: 800
});
// https://medium.com/datadriveninvestor/open-ai-ceo-sam-altman-predicts-the-next-trillion-dollar-ai-company-85b50c92b022?source=explore---------0-98--------------------910d2e5a_65e6_4967_b5fd_64f845cd8a37-------15
  await page.goto(websiteName, {
    waitUntil: 'networkidle2',
  });
  await page.evaluate(async () => {
    let scrollPosition = 0
    let documentHeight = document.body.scrollHeight

    while (documentHeight > scrollPosition) {
      window.scrollBy(0, documentHeight)
      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })
      scrollPosition = documentHeight
      documentHeight = document.body.scrollHeight
    }
  })
  await page.coverage.stopCSSCoverage();
  await page.coverage.stopJSCoverage();
  await page.pdf({ path: 'test.pdf', format: 'a4' });  
  console.log('page is ready to view')
  await browser.close();
})();