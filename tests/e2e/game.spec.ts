import { test, expect } from '@playwright/test';
test('starts and responds to keyboard movement', async ({ page }) => {
 const errors: string[] = [];
 page.on('pageerror', error => errors.push(error.message));
 await page.goto('/');
 await page.getByRole('button', { name: 'Start' }).click();
 const frog = page.locator('.frog');
 await expect(frog).toHaveCSS('top', '224px');
 await page.keyboard.press('ArrowUp');
 await expect(frog).toHaveCSS('top', '208px');
 await page.keyboard.press('Space');
 expect(errors).toEqual([]);
});
