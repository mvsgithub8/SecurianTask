const { expect, browser, $ } = require('@wdio/globals')

describe('Securian Task', () => {
    it('User should be able to update default calculator values ', async () => {
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
        await browser.maximizeWindow();
  await $('#current-age').setValue('49');
  await $('#retirement-age').setValue('68');
  await $('#current-income').click();
  await $('#current-income').setValue('20000');

  await browser.pause(3000); // Add a delay to mimic Thread.sleep

  await $('*=Adjust default values').click(); // Using a partial link text
  await $('#additional-income').click();
  await $('#additional-income').setValue('20000');
  await $('#retirement-duration').setValue('25');
  await $('#retirement-annual-income').setValue('40');
  await $('#pre-retirement-roi').setValue('25');
  await $('#post-retirement-roi').setValue('50');

  await $('//button[@class="dsg-btn-primary btn-block" and contains(@onclick, "savePersonalizedValues")]').click

         
    })
})

