import { test, expect } from '@playwright/test';

test('test login', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://3ns.link/signup');

  // Wait for the email input to be visible and fill it in
  await page.waitForSelector('input[placeholder=" "]', { state: 'visible' });
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('hello@gmail.com');
  await page.waitForTimeout(900);  // Add a small delay between actions

  // Wait for the Continue button to be visible and click it
  await page.waitForSelector('button:has-text("Continue")', { state: 'visible' });
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(900);  // Add a small delay after clicking the button

  // Wait for the password input to be visible and fill it in
  await page.waitForSelector('input[placeholder=" "]', { state: 'visible' });
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('12345678');
  await page.waitForTimeout(500);  // Add a small delay between actions

  // Wait for the Continue button to appear and click it
  await page.waitForSelector('button:has-text("Continue")', { state: 'visible' });
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(900);  // Add a small delay after clicking the button

  // Wait for the Skip link to be visible and click it

  await page.getByRole('link', { name: 'Skip' }).click();
  await page.waitForTimeout(900);  // Add a small delay between actions

  // Wait for other elements and handle them
  await page.getByText('✕').click();
  await page.waitForTimeout(900);  // Add a small delay

  await page.locator('div').filter({ hasText: /^googleai\/gemini-1\.5-pro-latest Your Custom AgentHelp \?$/ })
    .getByRole('button').nth(3).waitFor({ state: 'visible' });
  await page.locator('div').filter({ hasText: /^googleai\/gemini-1\.5-pro-latest Your Custom AgentHelp \?$/ })
    .getByRole('button').nth(3).click();

  // Wait for the Robot icon button to be visible and click it
  await page.getByRole('button', { name: 'Robot icon Your Agent Right' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Robot icon Your Agent Right' }).click();

  // Wait for the Create Your Agent button to be visible and click it
  await page.getByRole('button', { name: 'Create Your Agent' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Create Your Agent' }).click();

  // Wait for Name your model input to be visible, click and fill it
  await page.getByPlaceholder('Name your model').waitFor({ state: 'visible' });
  await page.getByPlaceholder('Name your model').click();
  await page.getByPlaceholder('Name your model').fill('test-1');
  await page.waitForTimeout(500);  // Add a small delay

  // Wait for Add a short description input to be visible, click and fill it
  await page.getByPlaceholder('Add a short description of').waitFor({ state: 'visible' });
  await page.getByPlaceholder('Add a short description of').click();
  await page.getByPlaceholder('Add a short description of').fill('this is my test agent');

  // Wait for Create button to appear and click it
  await page.getByRole('button', { name: 'Create forward icon' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Create forward icon' }).click();
});
