const { expect, browser, $ } = require('@wdio/globals')

describe('Securian Task', () => {
    it('Additional Social Security fields should display/hide based on Social Security benefits toggle ', async () => {
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

  const ssn = await $('//label[@for="yes-social-benefits"]');
  await ssn.click();

  const noSSN = await $('//label[@for="no-social-benefits"]');
  await noSSN.click();
 


        
    })
})

