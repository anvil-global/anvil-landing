# Content verification — Welcome Pack site

Branch: `redesign/welcome-pack-site`. Source of truth: *Anvil Welcome Pack with Training Academy* (23-page PDF, "Anvil Welcome Pack", Anvil Global Ltd).

This is a working draft. All copy has been transcribed from the pack without rewording. Nothing here certifies regulatory, awarding-body or legal compliance. Keep the Academy "Working draft" notice in place until Matt Greef / PJ sign off.

## Page → pack mapping

| URL | Pack pages | Notes |
|---|---|---|
| `/` (`index.html`) | pp. 1–2 | Two-column homepage hero: welcome copy and strapline on the left, spinning globe on the right, with the pack wordmark centred on the globe. Then the full "Protection Forged In the Heart of the Cotswolds" letter and the typed sign-off. PJ's handwritten signature has been left off on purpose. The three path cards reuse only pack headings and lines. |
| `/services.html` | pp. 3–12, 22 | "What we do" intro, 8 services in pack order, both Film & TV pages merged into one section, the 8 engagement steps and the p. 22 bespoke-travel CTA (now an email button to `info@`, not WhatsApp). |
| `/academy.html` | pp. 13–21 | Title pages, sections 01–06, the 2027 dates table, all 12 course cards, the venue, the pathway and booking. Plus the existing mailto enquiry form. |
| `/access.html` | — (not in pack) | Holding page only: name, in development, early-access email to `info@`. |
| `/contact.html` | p. 23 + existing legal | Pack contact block, the existing Formspree form (same endpoint), and the Privacy, Terms and Cookie text ported word for word from the old `contact.html`. |
| Footer (all pages) | p. 23 | Public email (`info@anvil-global.com`), location, Anvil-global.com, strapline, PJ name/title (name only — no personal contact details), Anvil Global Ltd, "Forged In The Cotswolds" mark. Also company no. 17370820 and legal links. "Terms and conditions apply" (on every pack page) links to `/contact.html#terms`. PJ's phone, WhatsApp and personal email have been removed at Brandon's request. |

## Small adaptations from print to web (please check)

- SEC-03 "Or combine with FREC 3, page 07" → "Or combine with FREC 3", linked to the pathway section. Page numbers don't apply on the web.
- On the Academy page, "Approved centre." is kept word for word, but the pack doesn't say approved by whom.
- Film & TV: the two pack pages are combined into one service section with a single "Email us" button.
- Service "Email us" buttons go to `info@anvil-global.com` with the subject `Enquiry: <service name>`.
- The pack intro "contact me personally at [PJ's email]" is now "contact us at info@anvil-global.com".
- Engagement step 1 no longer mentions WhatsApp as a public contact method (the rest of the pack wording is unchanged).
- The p. 22 bespoke-travel CTA and the contact-page CTA are email buttons, not WhatsApp.
- Contact page lead and meta description are email-only and do not claim 24/7 availability.
- The homepage spinning globe is restored from the live site (`assets/anvil-globe.js` and local geography) in a two-column hero: welcome copy on the left, globe on the right, with the pack wordmark centred on the globe. The Services / Academy buttons stay out of the hero (those links remain in the nav and the path cards). The Academy page still uses the static pack globe image.
- The Academy form labels, the date choices (Jan–Apr 2027 / First available / Flexible) and the consent line come from the old `academy.html`, not the pack.
- Contact form service list = the 8 pack services + "Training / Academy" + "Not sure / Other". Removed: Technical Travel Protection, Security Driving / Secure Chauffeuring, Asset Protection & Secure Delivery, International Retrieval, Threat & Risk Assessments, Medical Support.
- If the contact form fails to send, the error message still points people to `info@anvil-global.com`, as the old site did.

## Academy — date vs duration conflicts (not changed)

| Course | Listed duration | 2027 dates | Calendar days | Status |
|---|---|---|---|---|
| FREC 3 | 5 days | 5th – 10th Jan | 6 | **Mismatch** |
| EFAW | 1 day | 11th – 14th Jan | 4 | **Mismatch** |
| FREC 3 | 5 days | 15th – 20th Jan | 6 | **Mismatch** |
| CP Top-Up (Refresher) | 3 days | 22nd – 24th Jan | 3 | OK |
| DS Course | 6 days | 26th – 30th Jan | 5 | **Mismatch** |
| Close Protection | 18 days | 1st – 18th Feb | 18 | OK |
| FREC 3 | 5 days | 24th – 28th Feb | 5 | OK |
| Close Protection | 18 days | 6th – 24th Mar | 19 | **Mismatch** |
| FREC 3 | 5 days | 27th – 31st Mar | 5 | OK |
| Close Protection | 18 days | 5th – 23rd Apr | 19 | **Mismatch** |

Also check that the course types with no 2027 dates (DS Refresher, Physical Intervention, Conflict Management, CT & Martyn's Law, FAW, AED) are meant to be enquiry-only.

## Academy claims needing sign-off

- [ ] QNUK and Qualsafe approved-centre status, and permission to use each name.
- [ ] SEC-03 Close Protection: the pack doesn't name an awarding body, so none has been added.
- [ ] SEC-04 CP Refresher is shown as a "QNUK **Level 2** Award…", while the course it renews is Level 3.
- [ ] All qualification titles, word for word.
- [ ] All prices ("from", per person), the £100 EFAW add-on, the £2,800 pathway and the FREC 3-only discount wording.
- [ ] 8 seats per course; interview by Head of Training.
- [ ] Standard DBS check 6 weeks before **all** courses (including 1-day awareness and AED).
- [ ] Blue and Red ACT Awareness at least 2 weeks before DS and CP courses, including refreshers.
- [ ] 08:00 starts; the on-site gym with a personal trainer; parking and facilities.
- [ ] MED-04 "Typical validity 3 years"; MED-02 "Certificates valid for three years".
- [ ] Matt Greef's name, title and photo — and his consent to the photo being public.
- [ ] Services p. 7: "Qualified FREC Level 3 and Level 4 responders, alongside experienced paramedics" (Film & TV).

## Open questions (do not guess)

1. **Answered (18 Nov 2026):** public contact is `info@anvil-global.com` only. PJ's personal email, mobile and WhatsApp have been removed site-wide. `training@anvil-global.com` has also been replaced with `info@` (Brandon asked to use `info@` only). PJ's typed name and title on the letter and in the footer are unchanged.
2. Is "Between us we have more than 20 years of experience" confirmed as the team's combined experience? It has been kept word for word and not turned into a claim about the company's age.
3. Is `info@anvil-global.com` live and monitored? The pack's "24/7" claim has been taken off the contact page and meta description until someone confirms it. Do not put it back without that confirmation.
4. Academy sign-off — see the checklist above.
5. Should the Academy draft notice stay until Matt Greef / PJ sign off? (It is in place now.)
6. How much may the ANVIL Access coming-soon page say? (Right now it only says the name, that it's in development, and that early access enquiries are welcome.)
7. Are the current contact-page T&Cs enough, or will new terms be supplied before publishing? Note: the pack puts "Terms and conditions apply" on every page; on the web this now links to the existing website T&Cs, which don't cover service or course terms.
8. Confirm the pack photography may be used on the public site (Broadway Tower, the eight service images, Matt Greef's headshot).
9. **Signature:** PJ's handwritten signature from pack p. 2 has been removed from the site, as requested. Only the typed name and title remain.
10. Brand casing: the pack uses "Anvil" in body copy, "ANVIL GLOBAL" in the wordmark and "Anvil Global Ltd" in the sign-off; the old legal text uses "ANVIL Global Ltd". Is one form preferred?
11. The pack and the old site differ on location: "London Oxford Airport" (pack) vs "Oxford Airport, Kidlington" (old legal text). The legal text is unchanged.

## Publication gate

Resolve the date/duration conflicts and the sign-off items, answer the open questions, and get explicit approval before removing the draft notice or deploying to production.
