import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var photos = {
	hero: "/bchef-bakery-hero.png",
	catering: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85",
	macarons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=85",
	pastries: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
	table: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",
	chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
};
var services = [
	{
		eyebrow: "01 — Gather",
		title: "Catering",
		text: "Thoughtful menus and polished presentation for intimate gatherings, joyful celebrations and corporate occasions.",
		image: photos.catering,
		link: "#catering"
	},
	{
		eyebrow: "02 — Gift",
		title: "Macarons",
		text: "Delicate, colourful and handcrafted for gifting, dessert tables and the moments worth remembering.",
		image: photos.macarons,
		link: "#macarons"
	},
	{
		eyebrow: "03 — Delight",
		title: "Canapés & pastries",
		text: "French-inspired pastry and beautifully finished bites where every detail makes an impression.",
		image: photos.pastries,
		link: "#contact"
	}
];
var gallery = [
	{
		category: "Catering",
		image: photos.catering,
		label: "A table made for gathering"
	},
	{
		category: "Macarons",
		image: photos.macarons,
		label: "Handcrafted macarons"
	},
	{
		category: "Pastries",
		image: photos.pastries,
		label: "French-inspired pastry"
	},
	{
		category: "Events",
		image: photos.table,
		label: "Celebrations, beautifully served"
	}
];
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		children: "↗"
	});
}
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [sent, setSent] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		setSent(true);
	}
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "nav-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "brand brand-logo",
					href: "#home",
					"aria-label": "Bchef home",
					onClick: closeMenu,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/bchef-logo-transparent.png",
						alt: "Bchef"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-button",
					"aria-label": "Toggle navigation",
					"aria-expanded": menuOpen,
					onClick: () => setMenuOpen(!menuOpen),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: menuOpen ? "nav open" : "nav",
					"aria-label": "Main navigation",
					children: [[
						["Home", "home"],
						["Catering", "catering"],
						["Macarons", "macarons"],
						["About", "about"],
						["Gallery", "gallery"],
						["Contact", "contact"]
					].map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${id}`,
						onClick: closeMenu,
						children: label
					}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-cta",
						href: "#contact",
						onClick: closeMenu,
						children: ["Enquire now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "home",
			className: "hero",
			style: { backgroundImage: `linear-gradient(90deg, rgba(10,28,79,.88) 0%, rgba(10,28,79,.48) 48%, rgba(10,28,79,.05) 100%), url(${photos.hero})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-content reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker light",
						children: "Boutique catering · Bahrain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Made for the moments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "worth celebrating." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-copy",
						children: "Premium catering, handcrafted macarons and beautifully prepared bites for events across Bahrain."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "button-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button coral",
							href: "#catering",
							children: ["Explore catering ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-link light-link",
							href: "#contact",
							children: ["Make an enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-note",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Freshly prepared" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Beautifully presented" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made for you" })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "intro section-pad",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Welcome to Bchef"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Bring out your",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "inner chef." })
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bchef creates memorable food experiences for celebrations, gatherings and corporate occasions across Bahrain." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From handcrafted macarons to elegant catering, every order is prepared with attention to flavour, presentation and detail." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-link",
							href: "#about",
							children: ["Our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stamp",
					"aria-label": "Made with care in Bahrain",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made with care" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["B", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♥" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "in Bahrain" })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "services section-pad",
			"aria-labelledby": "services-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "What we create"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "services-title",
					children: ["A feast for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "every occasion." })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Personal service, considered details and a little Bchef magic." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-grid",
				children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "service-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.link,
							className: "card-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: item.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "catering",
			className: "split navy-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split-image",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos.table,
					alt: "An abundant catered table"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "floating-label",
					children: "Private · Corporate · Celebrations"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker light",
						children: "Catering, made personal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Gather beautifully.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Leave the rest to us." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From intimate family gatherings to larger celebrations and corporate occasions, Bchef creates food experiences designed around your event." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "event-list",
						children: [
							["Private gatherings", "For tables filled with the people you love."],
							["Corporate events", "Polished catering that represents your brand."],
							["Custom occasions", "A considered menu shaped around your moment."]
						].map(([title, text], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["0", i + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: text })] })] }, title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "button aqua",
						href: "#contact",
						children: ["Tell us about your event ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "macarons",
			className: "macaron-section section-pad",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "macaron-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Handcrafted macarons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"A little luxury",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "in every bite." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for celebrations, gifting and memorable occasions. Collections, flavours and finishing details can be tailored when you enquire." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "button navy",
						href: "#contact",
						children: ["Request a macaron order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "macaron-visual",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shape shape-a" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.macarons,
						alt: "A colourful selection of macarons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shape shape-b" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "photo-note",
						children: [
							"Made to match",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"your occasion"
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "about",
			className: "about section-pad",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-photo",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos.chef,
					alt: "Chef preparing food in a professional kitchen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bahrain · with love" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker light",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Made in Bahrain.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Created with passion." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bchef began with a simple idea: make beautifully prepared food part of every memorable occasion. Today, we focus on premium catering, handcrafted macarons and French-inspired pastries, all prepared with an emphasis on taste, presentation and personal service." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pillars",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Freshly prepared" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Beautifully presented" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Made for you" })] })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "gallery",
			className: "gallery section-pad",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "From the Bchef table"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"A glimpse of",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "what we make." })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "filters",
						"aria-label": "Gallery filters",
						children: [
							"All",
							"Catering",
							"Macarons",
							"Pastries",
							"Events"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: filter === item ? "active" : "",
							onClick: () => setFilter(item),
							children: item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-grid",
					children: gallery.filter((item) => filter === "All" || item.category === filter).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `gallery-item item-${index}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.category }), item.label] })]
					}, item.category))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "gallery-note",
					children: "Preview photography shown for layout direction. Replace with Bchef’s own imagery before launch."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "contact",
			className: "contact section-pad",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker light",
						children: "Start a conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Let’s create",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "something special." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tell us a little about your occasion. We’ll get back to you to discuss the details and create a tailored quotation." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@bchefbh.com",
						children: ["info@bchefbh.com ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Bahrain" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "enquiry-form",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							required: true,
							placeholder: "Your name"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							placeholder: "you@email.com"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							placeholder: "+973"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Event date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "date",
							type: "date"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "field-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Interested in", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "interest",
							defaultValue: "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select a service"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Catering" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Macarons" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Canapés" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pastries" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Corporate catering" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Private event" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Approx. guests", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "guests",
							type: "number",
							min: "1",
							placeholder: "e.g. 40"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Tell us about your event", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "details",
						rows: 3,
						placeholder: "Occasion, location, style and anything else you’d like us to know…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sent ? "Thank you — this preview form is ready to connect to Bchef’s email service." : "By submitting, you agree to be contacted about your enquiry." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "button coral",
							type: "submit",
							children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "brand brand-logo footer-brand",
				href: "#home",
				"aria-label": "Bchef home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/bchef-logo-transparent.png",
					alt: "Bchef"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Beautiful food for memorable occasions." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-links",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#catering",
						children: "Catering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#macarons",
						children: "Macarons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#gallery",
						children: "Gallery"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Company" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:info@bchefbh.com",
						children: "Email us"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Bchef. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "bchefbh.com · Bahrain" })]
			})
		] })
	] });
}
//#endregion
export { Home as default };
