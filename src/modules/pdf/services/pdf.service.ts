import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer';
import * as handlebars from 'handlebars';

const OUTPUT_PATH = join(__dirname, '..', '..', '..', 'public');

@Injectable()
export class PdfService {
  async generatePdf<T>(data: T, templateName: string): Promise<string> {
    // Імпортуємо темплейт
    const templatePath = join(__dirname, '..', 'templates', templateName);
    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    // Перетворюємо handlebars темплейт в html код і вставляємо змінні
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    // Запускаємо браузер
    const browser = await puppeteer.launch();

    // Створюємо HTML сторінку
    const page = await browser.newPage();

    // Вставляємо згенерований HTML код
    await page.setContent(html);

    const fileName = `ticket-${Date.now()}.pdf`;

    // Генерація PDF з HTML сторінки
    await page.pdf({
      path: `${OUTPUT_PATH}/${fileName}`,
      format: 'A4',
      printBackground: true,
    });

    // Закриваємо зʼєднання з браузром
    await browser.close();

    // Повертаємо повний URL
    return `http://localhost:3700/static/${fileName}`;
  }
}
