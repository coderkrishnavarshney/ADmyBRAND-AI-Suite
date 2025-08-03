# AdmyBrand AI Suite Landing Page

A modern, responsive landing page for AdmyBrand AI Suite - an AI-powered marketing platform that helps businesses streamline campaigns, boost conversions, and grow revenue.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark/light mode support
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Fast**: Built with Next.js 14 and optimized for performance
- **Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: React Icons (FontAwesome)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coderkrishnavarshney/ADmyBRAND-AI-Suite.git
   cd ADmyBRAND-AI-Suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
admybrand-ai-suite-landing/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── Button.tsx         # Custom button component
│   ├── Card.tsx           # Card layout component
│   ├── FAQItem.tsx        # FAQ accordion item
│   ├── FeatureIcon.tsx    # Feature display component
│   ├── Input.tsx          # Form input component
│   ├── Modal.tsx          # Modal dialog component
│   ├── PricingCard.tsx    # Pricing tier card
│   └── TestimonialCard.tsx # Customer testimonial card
├── sections/              # Page sections
│   ├── Contact.tsx        # Contact form section
│   ├── FAQ.tsx            # FAQ section
│   ├── Features.tsx       # Features showcase
│   ├── Footer.tsx         # Footer section
│   ├── Hero.tsx           # Hero banner section
│   ├── Pricing.tsx        # Pricing plans section
│   └── Testimonials.tsx   # Customer testimonials
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`. You can customize:
- Primary color (currently blue)
- Dark mode colors
- Background colors

### Content
Update the content in the respective section files:
- `sections/Hero.tsx` - Main headline and CTA
- `sections/Features.tsx` - Feature list
- `sections/Pricing.tsx` - Pricing tiers
- `sections/Testimonials.tsx` - Customer testimonials

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Connect GitHub repository
- **AWS Amplify**: Connect GitHub repository

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email support@admybrand.com or create an issue in this repository.

---

**Built with ❤️ by the AdmyBrand Team**
