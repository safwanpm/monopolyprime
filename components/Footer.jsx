'use client'
const Footer = () => (
  <footer className="bg-[#0A0A18] border-t border-[#C9A84C]/10 px-6 md:px-16 lg:px-[8vw] pt-16 pb-8">
    
    <div className="grid md:grid-cols-4 gap-12 mb-12">
      
      {/* Brand */}
      <div className="md:col-span-1 lg:col-span-1">
        <div className="flex items-center gap-3 mb-5">
          
          <div className="
            w-8 h-8
            bg-gradient-to-br from-[#C9A84C] to-[#9A7A2E]
            flex items-center justify-center
            clip-hex
          ">
            <span className="font-serif font-bold text-sm text-[#1A1A2E]">
              M
            </span>
          </div>

          <div>
            <div className="font-serif text-lg font-bold text-[#F5F0E8]">
              MONOPOLY PRIME
            </div>
            <div className="
              text-[8px] font-semibold tracking-[0.35em]
              text-[#C9A84C]
            ">
              REAL ESTATE · SHARJAH
            </div>
          </div>
        </div>

        <p className="text-sm text-[#A09070] leading-relaxed max-w-xs">
          Sharjah's premier luxury real estate consultancy, dedicated to
          connecting clients with exceptional homes since 2012.
        </p>
      </div>

      {[
        {
          title: "Properties",
          items: ["Apartments", "Villas", "Townhouses", "Commercial", "New Developments"],
        },
        {
          title: "Company",
          items: ["About Us", "Our Team", "Careers", "Press", "Contact"],
        },
        {
          title: "Areas",
          items: ["Al Majaz", "Muwaileh", "Al Nahda", "Aljada", "Corniche"],
        },
      ].map(col => (
        <div key={col.title}>
          
          <h4 className="
            text-[10px] tracking-[0.3em]
            text-[#C9A84C]
            uppercase
            mb-5
          ">
            {col.title}
          </h4>

          <div className="space-y-3">
            {col.items.map(item => (
              <a
                key={item}
                href="#"
                className="
                  block text-sm text-[#A09070]
                  hover:text-[#C9A84C]
                  transition-colors
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="
      border-t border-[#C9A84C]/10
      pt-6
      flex flex-col md:flex-row
      justify-between items-center
      gap-4
    ">
      <div className="text-xs text-[#A09070]">
        © 2024 Monopoly Prime Real Estate LLC. All rights reserved.
        RERA License: XXXX
      </div>

      <div className="flex gap-6">
        {["Privacy", "Terms", "Sitemap"].map(link => (
          <a
            key={link}
            href="#"
            className="
              text-xs text-[#A09070]
              hover:text-[#C9A84C]
              transition-colors
            "
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
