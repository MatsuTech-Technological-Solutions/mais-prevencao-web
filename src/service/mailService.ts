import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  time?: string;
  year?: string;
}

declare global {
  interface Window {
    EMAIL_CONFIG: {
      SERVICE_ID: string;
      TEMPLATE_ID: string;
      PUBLIC_KEY: string;
    };
  }
}

class MailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    if (!window.EMAIL_CONFIG) {
      this.serviceId = 'mp_mail_sender';
      this.templateId = 'template_aorukmg';
      this.publicKey = '4W2AWimiYmHig-MwD';
    } else {
      this.serviceId = window.EMAIL_CONFIG.SERVICE_ID;
      this.templateId = window.EMAIL_CONFIG.TEMPLATE_ID;
      this.publicKey = window.EMAIL_CONFIG.PUBLIC_KEY;
    }

    emailjs.init(this.publicKey);
  }

  async sendEmail(data: EmailData): Promise<void> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        time: data.time || new Date().toLocaleString('pt-BR'),
        year: data.year || new Date().getFullYear().toString()
      };

      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}

export const mailService = new MailService();