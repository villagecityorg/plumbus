import puppeteer from 'puppeteer';
import path from 'path';

async function captureFullPageScreenshot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set viewport to a reasonable desktop size
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to the landing page...');
  await page.goto('http://localhost:4321/', { 
    waitUntil: 'networkidle2',
    timeout: 30000 
  });
  
  // Wait a bit for any animations to load
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log('Capturing full page screenshot...');
  
  // Get the full height of the page
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();
  
  // Set viewport to full page height to capture everything
  await page.setViewport({ width: 1920, height: Math.ceil(height + 100) });
  
  // Capture the full page screenshot
  await page.screenshot({ 
    path: 'landing-page-full.png',
    fullPage: true
  });
  
  console.log('Screenshot saved as landing-page-full.png');
  
  await browser.close();
}

captureFullPageScreenshot().catch(console.error);
