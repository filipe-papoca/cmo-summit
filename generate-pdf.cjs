const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const DIST_PATH = 'C:/Users/thaii/AppData/Local/Temp/cmosummit2/dist';
const OUTPUT_PDF = 'C:/Users/thaii/OneDrive/\u00c1rea de Trabalho/Papoca/CMO-Summit-Preview.pdf';

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_PATH, req.url === '/' ? 'index.html' : req.url);
      if (!fs.existsSync(filePath)) filePath = path.join(DIST_PATH, 'index.html');
      const ext = path.extname(filePath);
      const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.woff2':'font/woff2'};
      try {
        res.writeHead(200, {'Content-Type': types[ext] || 'application/octet-stream'});
        fs.createReadStream(filePath).pipe(res);
      } catch(e) {
        res.writeHead(404); res.end();
      }
    });
    server.listen(3456, () => { console.log('Server ready on :3456'); resolve(server); });
  });
}

async function run() {
  const server = await startServer();

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Loading page...');
  await page.goto('http://localhost:3456', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  console.log('Generating PDF...');
  await page.pdf({
    path: OUTPUT_PDF,
    format: 'A4',
    landscape: true,
    printBackground: true,
    scale: 0.65,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log('PDF saved to:', OUTPUT_PDF);
  await browser.close();
  server.close();
}

run().catch(e => { console.error(e.message); process.exit(1); });
