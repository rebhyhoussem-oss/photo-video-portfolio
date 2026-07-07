import { InstagramIcon, MailIcon, PhoneIcon } from '@/icons'

const socialLinks = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/houssem_rebhyy/', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-fg/10 bg-bg-alt py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold tracking-wide text-fg">
            HR <span className="text-teal">Visuals</span>
          </a>

          {/* Contact touchpoints */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href="tel:+96555947036"
              className="inline-flex items-center gap-2 font-semibold text-fg transition-colors hover:text-teal"
            >
              <PhoneIcon className="h-5 w-5 text-tangerine" />
              +965 55947036
            </a>
            <a
              href="mailto:rebhyhoussem@gmail.com"
              className="inline-flex items-center gap-2 font-semibold text-fg transition-colors hover:text-teal"
            >
              <MailIcon className="h-5 w-5 text-tangerine" />
              rebhyhoussem@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-fg-muted transition-colors duration-200 hover:text-teal"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-fg-muted md:text-left">
          &copy; {new Date().getFullYear()} HR Visuals. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
