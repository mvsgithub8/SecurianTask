const { expect, browser, $ } = require('@wdio/globals')

describe('Securian Task', () => {
    it('User should be able to submit form with all required fields filled in', async () => {
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
 
  await browser.maximizeWindow();
  await $('#current-age').setValue('49');
  await $('#retirement-age').setValue('68');
  await $('#current-income').click();
  await $('#current-income').setValue('20000');

  await $('#spouse-income').click();
  await $('#spouse-income').setValue('20000');
  await $('#current-total-savings').click();
  await $('#current-total-savings').setValue('20000');

  await $('#current-annual-savings').setValue('80');
  await $('#savings-increase-rate').setValue('30');

  await $('[data-tag-id="submit"]').click();


        
    })
})

