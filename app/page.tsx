"use client";

import { FormEvent, useState } from "react";

const photos = {
  hero: "/bchef-bakery-hero.png",
  catering: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85",
  macarons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=85",
  pastries: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
  table: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85",
};

const services = [
  { eyebrow: "01 — Gather", title: "Catering", text: "Thoughtful menus and polished presentation for intimate gatherings, joyful celebrations and corporate occasions.", image: photos.catering, link: "#catering" },
  { eyebrow: "02 — Gift", title: "Macarons", text: "Delicate, colourful and handcrafted for gifting, dessert tables and the moments worth remembering.", image: photos.macarons, link: "#macarons" },
  { eyebrow: "03 — Delight", title: "Canapés & pastries", text: "French-inspired pastry and beautifully finished bites where every detail makes an impression.", image: photos.pastries, link: "#contact" },
];

const gallery = [
  { category: "Catering", image: photos.catering, label: "A table made for gathering" },
  { category: "Macarons", image: photos.macarons, label: "Handcrafted macarons" },
  { category: "Pastries", image: photos.pastries, label: "French-inspired pastry" },
  { category: "Events", image: photos.table, label: "Celebrations, beautifully served" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand brand-logo" href="#home" aria-label="Bchef home" onClick={closeMenu}>
          <img src="/bchef-logo-transparent.png" alt="Bchef" />
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {[["Home","home"],["Catering","catering"],["Macarons","macarons"],["About","about"],["Gallery","gallery"],["Contact","contact"]].map(([label,id]) =>
            <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Enquire now <Arrow /></a>
        </nav>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,28,79,.88) 0%, rgba(10,28,79,.48) 48%, rgba(10,28,79,.05) 100%), url(${photos.hero})` }}>
        <div className="hero-content reveal">
          <p className="kicker light">Boutique catering · Bahrain</p>
          <h1>Made for the moments <em>worth celebrating.</em></h1>
          <p className="hero-copy">Premium catering, handcrafted macarons and beautifully prepared bites for events across Bahrain.</p>
          <div className="button-row">
            <a className="button coral" href="#catering">Explore catering <Arrow /></a>
            <a className="text-link light-link" href="#contact">Make an enquiry <Arrow /></a>
          </div>
        </div>
        <div className="hero-note"><span>Freshly prepared</span><span>Beautifully presented</span><span>Made for you</span></div>
      </section>

      <section className="intro section-pad">
        <div><p className="kicker">Welcome to Bchef</p><h2>Bring out your<br/><em>inner chef.</em></h2></div>
        <div className="intro-copy">
          <p>Bchef creates memorable food experiences for celebrations, gatherings and corporate occasions across Bahrain.</p>
          <p>From handcrafted macarons to elegant catering, every order is prepared with attention to flavour, presentation and detail.</p>
          <a className="text-link" href="#about">Our story <Arrow /></a>
        </div>
        <div className="stamp" aria-label="Made with care in Bahrain"><span>Made with care</span><b>B<span>♥</span></b><span>in Bahrain</span></div>
      </section>

      <section className="services section-pad" aria-labelledby="services-title">
        <div className="section-head">
          <div><p className="kicker">What we create</p><h2 id="services-title">A feast for <em>every occasion.</em></h2></div>
          <p>Personal service, considered details and a little Bchef magic.</p>
        </div>
        <div className="service-grid">
          {services.map((item) => <article className="service-card" key={item.title}>
            <a href={item.link} className="card-image"><img src={item.image} alt=""/><span><Arrow /></span></a>
            <p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
      </section>

      <section id="catering" className="split navy-section">
        <div className="split-image"><img src={photos.table} alt="An abundant catered table"/><div className="floating-label">Private · Corporate · Celebrations</div></div>
        <div className="split-copy">
          <p className="kicker light">Catering, made personal</p>
          <h2>Gather beautifully.<br/><em>Leave the rest to us.</em></h2>
          <p>From intimate family gatherings to larger celebrations and corporate occasions, Bchef creates food experiences designed around your event.</p>
          <div className="event-list">
            {[["Private gatherings","For tables filled with the people you love."],["Corporate events","Polished catering that represents your brand."],["Custom occasions","A considered menu shaped around your moment."]].map(([title,text],i) => <div key={title}><b>0{i+1}</b><span><strong>{title}</strong><small>{text}</small></span></div>)}
          </div>
          <a className="button aqua" href="#contact">Tell us about your event <Arrow /></a>
        </div>
      </section>

      <section id="macarons" className="macaron-section section-pad">
        <div className="macaron-copy"><p className="kicker">Handcrafted macarons</p><h2>A little luxury<br/><em>in every bite.</em></h2><p>Made for celebrations, gifting and memorable occasions. Collections, flavours and finishing details can be tailored when you enquire.</p><a className="button navy" href="#contact">Request a macaron order <Arrow /></a></div>
        <div className="macaron-visual"><div className="shape shape-a"/><img src={photos.macarons} alt="A colourful selection of macarons"/><div className="shape shape-b"/><span className="photo-note">Made to match<br/>your occasion</span></div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-photo"><img src={photos.chef} alt="Chef preparing food in a professional kitchen"/><span>Bahrain · with love</span></div>
        <div className="about-copy"><p className="kicker light">Our story</p><h2>Made in Bahrain.<br/><em>Created with passion.</em></h2><p>Bchef began with a simple idea: make beautifully prepared food part of every memorable occasion. Today, we focus on premium catering, handcrafted macarons and French-inspired pastries, all prepared with an emphasis on taste, presentation and personal service.</p>
          <div className="pillars"><div><b>01</b><strong>Freshly prepared</strong></div><div><b>02</b><strong>Beautifully presented</strong></div><div><b>03</b><strong>Made for you</strong></div></div>
        </div>
      </section>

      <section id="gallery" className="gallery section-pad">
        <div className="section-head"><div><p className="kicker">From the Bchef table</p><h2>A glimpse of<br/><em>what we make.</em></h2></div><div className="filters" aria-label="Gallery filters">{["All","Catering","Macarons","Pastries","Events"].map(item => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div>
        <div className="gallery-grid">{gallery.filter(item => filter === "All" || item.category === filter).map((item,index) => <figure className={`gallery-item item-${index}`} key={item.category}><img src={item.image} alt={item.label}/><figcaption><span>{item.category}</span>{item.label}</figcaption></figure>)}</div>
        <p className="gallery-note">Preview photography shown for layout direction. Replace with Bchef’s own imagery before launch.</p>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-intro"><p className="kicker light">Start a conversation</p><h2>Let’s create<br/><em>something special.</em></h2><p>Tell us a little about your occasion. We’ll get back to you to discuss the details and create a tailored quotation.</p><a href="mailto:info@bchefbh.com">info@bchefbh.com <Arrow /></a><small>Bahrain</small></div>
        <form className="enquiry-form" onSubmit={submit}>
          <div className="field-row"><label>Full name<input name="name" required placeholder="Your name"/></label><label>Email address<input name="email" type="email" required placeholder="you@email.com"/></label></div>
          <div className="field-row"><label>Phone number<input name="phone" placeholder="+973"/></label><label>Event date<input name="date" type="date"/></label></div>
          <div className="field-row"><label>Interested in<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>Catering</option><option>Macarons</option><option>Canapés</option><option>Pastries</option><option>Corporate catering</option><option>Private event</option><option>Other</option></select></label><label>Approx. guests<input name="guests" type="number" min="1" placeholder="e.g. 40"/></label></div>
          <label>Tell us about your event<textarea name="details" rows={3} placeholder="Occasion, location, style and anything else you’d like us to know…"/></label>
          <div className="form-end"><p>{sent ? "Thank you — this preview form is ready to connect to Bchef’s email service." : "By submitting, you agree to be contacted about your enquiry."}</p><button className="button coral" type="submit">Send enquiry <Arrow /></button></div>
        </form>
      </section>

      <footer>
        <a className="brand brand-logo footer-brand" href="#home" aria-label="Bchef home"><img src="/bchef-logo-transparent.png" alt="Bchef" /></a>
        <p>Beautiful food for memorable occasions.</p>
        <div className="footer-links"><div><span>Explore</span><a href="#catering">Catering</a><a href="#macarons">Macarons</a><a href="#gallery">Gallery</a></div><div><span>Company</span><a href="#about">About</a><a href="#contact">Contact</a><a href="mailto:info@bchefbh.com">Email us</a></div></div>
        <div className="footer-bottom"><span>© 2026 Bchef. All rights reserved.</span><span>bchefbh.com · Bahrain</span><a href="https://mstvmedia.com" target="_blank" rel="noopener noreferrer">Created by MSTV Media <Arrow /></a></div>
      </footer>
    </main>
  );
}
