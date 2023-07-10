const puppeteer = require("puppeteer");
require('dotenv').config();

const url = 'https://www.akiracomics.com/';

(async () => {
    // Arrancamos pupeteer
    const browser = await puppeteer.launch({
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
              ? process.env.PUPPETEER_EXECUTABLE_PATH
              : puppeteer.executablePath(),
      });

    // Abrimos nueva pagina
    const page = await browser.newPage();

    // Navegar a la página deseada
    await page.goto(url);
    await page.waitForSelector('input[name=buscar]'); //espera a cargar el input
    await page.click('.fa-search');  // click en botón
    await page.waitForSelector('.buscar');  //espera a cargar selector con clase .buscar
    await page.$eval('input[name=buscar]', el => el.value = 'spiderman'); 
    await page. keyboard.press('Enter');
    await page.waitForSelector('.producto');


    const dataScrap = await page.$$eval('.producto', productContainer => {
      return productContainer.map(product => {
        const src = product.querySelector('div.imagen > a > img').getAttribute('src'); //url imagen
        const title = product.querySelector('div.panel-informacion > h4').innerText;  //texto titulo
        const link = product.querySelector('div.panel-informacion > h4 > a').getAttribute('href');  //link descripción
        const price = product.querySelector('div.panel-informacion > div.panel.panel-precio > span.precio.ofertado').innerText;  //
        
        const url = 'https://www.akiracomics.com';
        const linkDescription = url+link;
        const imgSrc = url+src;

        return {
          imgSrc,
          title,
          linkDescription,
          price
        };
      });
    });
  // Prefijo https://www.akiracomics.com/
  console.log(dataScrap);

  // Cerrar el navegador
    await browser.close();
  })();
