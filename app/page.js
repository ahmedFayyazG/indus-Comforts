'use client';

import { useMemo, useState } from 'react';

const products = [
  { name: 'The Arlo', type: 'Sofas', price: '£1,795', tag: 'Best seller', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85', tone: 'Stone boucle', desc: 'Deep, generous proportions with a soft, sink-in seat.' },
  { name: 'The Noma', type: 'Modular', price: '£2,240', tag: 'New', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=85', tone: 'Oatmeal linen', desc: 'A flexible modular shape made to move with your home.' },
  { name: 'The Cleo', type: 'Armchairs', price: '£695', tag: 'Quiet classic', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85', tone: 'Toffee velvet', desc: 'A compact, curving chair for reading, resting and doing less.' },
  { name: 'The Vale', type: 'Sofas', price: '£1,990', tag: 'Made to order', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=85', tone: 'Olive chenille', desc: 'A relaxed silhouette with room for the whole weekend.' },
  { name: 'The Harlow', type: 'Modular', price: '£2,780', tag: 'The forever sofa', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85', tone: 'Warm ivory', desc: 'Low, loungey and designed to be configured your way.' },
  { name: 'The Moss', type: 'Armchairs', price: '£780', tag: 'Small space', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85', tone: 'Forest green', desc: 'A little statement with a surprisingly big personality.' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [active, setActive] = useState('All pieces');
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);
  const filters = ['All pieces', 'Sofas', 'Modular', 'Armchairs'];
  const visible = useMemo(() => active === 'All pieces' ? products : products.filter(p => p.type === active), [active]);
  const catalogData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Indus Comforts furniture collection',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        category: product.type,
        description: product.desc,
        image: product.image,
        brand: { '@type': 'Brand', name: 'Indus Comforts' },
        offers: { '@type': 'Offer', priceCurrency: 'GBP', price: product.price.replace('£', '').replace(',', ''), availability: 'https://schema.org/InStock', url: 'https://induscomforts.co.uk/#shop' },
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogData) }} />
      <div className="announcement">Free fabric samples, delivered to your door <span>·</span> Delivery across mainland UK</div>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? 'Close' : 'Menu'}</button>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            <a href="#shop" onClick={() => setMenu(false)}>Shop</a><a href="#story" onClick={() => setMenu(false)}>Our story</a><a href="#journal" onClick={() => setMenu(false)}>Journal</a>
          </div>
          <a className="wordmark" href="#top">INDUS <i>COMFORTS</i></a>
          <div className="nav-actions"><a href="#contact">Visit us</a><button aria-label="Shopping bag">Bag <span>(0)</span></button></div>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">Furniture for living well</p><h1>Take your<br /><em>time.</em></h1><p className="hero-intro">Beautifully made furniture for the slow mornings, long lunches and everything in between.</p><a className="button button-dark" href="#shop">Explore the collection <Arrow /></a></div>
        <div className="hero-image"><div className="hero-note"><span>01</span><p>Soft forms.<br />Strong feeling.</p></div></div>
      </section>

      <section className="marquee" aria-label="Indus Comforts values"><span>Made for real life</span><b>✦</b><span>Thoughtful by design</span><b>✦</b><span>Comfort, considered</span><b>✦</b></section>

      <section className="intro section" id="story"><div className="section-label">01 / The Indus way</div><div className="intro-content"><h2>Not furniture for looking at. Furniture for <em>living in.</em></h2><div><p>We believe the best rooms are not perfect. They are personal, comfortable and full of the people and moments that matter.</p><a className="text-link" href="#journal">Read our story <Arrow /></a></div></div></section>

      <section className="shop section" id="shop"><div className="shop-head"><div><div className="section-label">02 / The collection</div><h2>Pieces to come home to.</h2></div><p>Thoughtful silhouettes, honest materials and plenty of room to get comfortable.</p></div><div className="filters" role="tablist" aria-label="Filter products">{filters.map(f => <button key={f} className={active === f ? 'active' : ''} onClick={() => setActive(f)}>{f}</button>)}</div><div className="product-grid">{visible.map((p, i) => <article className="product-card" key={p.name} onClick={() => setSelected(p)}><div className="product-image"><img src={p.image} alt={p.name} /><span>{p.tag}</span><button aria-label={`Quick view ${p.name}`} onClick={(e) => { e.stopPropagation(); setSelected(p); }}>+</button></div><div className="product-meta"><div><h3>{p.name}</h3><p>{p.tone}</p></div><strong>{p.price}</strong></div></article>)}</div><div className="center"><a className="button button-outline" href="#contact">See all pieces <Arrow /></a></div></section>

      <section className="feature"><div className="feature-image"></div><div className="feature-copy"><div className="section-label">03 / Made to feel like yours</div><h2>Colour is a mood.<br /><em>Choose yours.</em></h2><p>From quiet neutrals to rich, expressive colour, every piece is available in a considered range of fabrics. Order complimentary samples and find the one that feels like home.</p><a className="button button-light" href="#contact">Order free samples <Arrow /></a></div></section>

      <section className="journal section" id="journal"><div className="section-label">04 / From the journal</div><div className="journal-head"><h2>Little notes on<br /><em>living well.</em></h2><a className="text-link" href="#contact">View all journal <Arrow /></a></div><div className="journal-grid"><article><div className="journal-photo photo-one"></div><p className="eyebrow">At home</p><h3>How to make a room feel like you</h3><a href="#contact">Read more <Arrow /></a></article><article><div className="journal-photo photo-two"></div><p className="eyebrow">The materials</p><h3>A closer look at boucle, linen and velvet</h3><a href="#contact">Read more <Arrow /></a></article><article><div className="journal-photo photo-three"></div><p className="eyebrow">Slow living</p><h3>The case for doing absolutely nothing</h3><a href="#contact">Read more <Arrow /></a></article></div></section>

      <section className="contact" id="contact"><div><div className="section-label">05 / Come and sit</div><h2>Let’s make your<br /><em>space feel good.</em></h2></div><div className="contact-info"><p>Have a question, need a fabric sample or simply want to talk sofas? We’re here.</p><a className="button button-light" href="mailto:hello@induscomforts.co.uk">hello@induscomforts.co.uk <Arrow /></a><p className="small">Indus Comforts Limited<br />5 Lord Street, Brierfield, Nelson, England, BB9 5JY</p></div></section>

      <footer><a className="wordmark" href="#top">INDUS <i>COMFORTS</i></a><p>Furniture for living well.</p><div><span>© 2026 Indus Comforts Limited</span><span>Company no. 17061353 · Active</span><span>Privacy · Terms</span></div></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}>×</button><img src={selected.image} alt={selected.name} /><div className="modal-details"><p className="eyebrow">{selected.type} · {selected.tag}</p><h2>{selected.name}</h2><p>{selected.desc}</p><strong>{selected.price}</strong><button className="button button-dark" onClick={() => setSelected(null)}>Request details <Arrow /></button></div></div></div>}
    </main>
  );
}
