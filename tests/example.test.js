const puppeteer = require('puppeteer')

describe('Mi primer prueba abriendo un navegador',()=>{
    it('Debe buscar consolas de Xbox One', async()=>{
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://www.amazon.com/')
        await page.locator('input[id="twotabsearchtextbox"]').fill('xbox one')
        await page.click('input[id="nav-search-submit-button"]')
        await new Promise(r => setTimeout(r,5000))
        await browser.close();
    })
    it('Debe buscar consolas de PlayStation 4 con xpath', async()=>{
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://www.amazon.com/')
        var searchInput = await page.waitForXPath('(//*[@id="twotabsearchtextbox"])')
        await searchInput.type('playstation 4')
        var buttonSearch = await page.waitForXPath('(//*[@id="nav-search-submit-button"])')
        await buttonSearch.click()
        await new Promise(r => setTimeout(r,5000))
        await browser.close();
    })
    it('Debe buscar consolas de Switch con css', async()=>{
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://www.amazon.com/')
        var searchInput = await page.waitForSelector('::-p-xpath(//*[@id="twotabsearchtextbox"])')
        await searchInput.type('Nintendo Switch')
        var buttonSearch = await page.waitForSelector('::-p-xpath(//*[@id="nav-search-submit-button"])')
        await buttonSearch.click()
        await new Promise(r => setTimeout(r,5000))
        await browser.close();
    })
})