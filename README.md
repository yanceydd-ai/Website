# Personal Portfolio Website

A clean, warm, mobile-friendly portfolio built with plain HTML, CSS and a little JavaScript.
There is no build step and nothing to install: every file is something you can open and edit in a text editor.

## What's inside

```
index.html      Homepage: intro, services, featured work, testimonial
about.html      About Me: photo, bio, skills, experience timeline, values
work.html       Gallery: filterable project grid with click-to-enlarge
contact.html    Contact details and a message form
css/style.css   All styling (colors and fonts are at the very top)
js/main.js      Mobile menu, gallery filters/lightbox, form handling
images/         Placeholder images. Replace these with your own.
```

## Making it yours

Open the files in any text editor. [VS Code](https://code.visualstudio.com/) is free and works well.
Look for comments that start with `EDIT:`; they mark the spots to change.

1. **Your name**: search all four `.html` files for `Your Name` and replace it.
   (VS Code: *Edit → Replace in Files*.)
2. **Text**: replace the placeholder sentences on each page with your own words.
3. **Images**:
   - Put your photos in `images/` (projects in `images/work/`).
   - Update the matching `src="..."` in the HTML, e.g. `images/work/project-1.svg` → `images/work/my-logo-project.jpg`.
   - Update the `alt="..."` text to describe each image (helps accessibility and search engines).
   - Tip: resize photos to about 1600px wide and compress them (e.g. with [Squoosh](https://squoosh.app)) so the site loads quickly.
4. **Gallery projects** (`work.html`): copy a whole `<figure class="gallery-item">…</figure>` block to add a project, or delete one to remove it.
   Set `data-category` to one of the filter buttons (`branding`, `photography`, `web`), or rename the filters to fit your work.
5. **Colors and fonts**: change the values at the top of `css/style.css`. For example, set `--color-primary` to a different color and every button and link updates.
6. **Social links**: in each page's footer, replace the `href="#"` values with your profile URLs.
7. **Header and footer** appear on every page, so if you change them (e.g. add a new menu item), make the same edit in all four HTML files.

## Setting up the contact form

The form uses [Formspree](https://formspree.io), a free service that emails you each submission. No server needed.

1. Sign up at formspree.io and create a new form.
2. Copy your form ID (the part after `/f/` in the URL they give you, e.g. `xyzabcde`).
3. In `contact.html`, replace `YOUR_FORM_ID` with it:
   `action="https://formspree.io/f/xyzabcde"`

Until you do this, the form shows a reminder message instead of sending.
Also update the email address in the contact details list.

## Previewing on your computer

**Quickest:** double-click `index.html` to open it in your browser. Everything works this way except the contact form sending.

**More accurate (recommended):** run a tiny local web server from this folder, then visit <http://localhost:8000>:

```bash
# If you have Python installed (built into macOS and most Linux):
python3 -m http.server 8000

# Or, if you have Node.js:
npx serve .
```

In VS Code you can also install the **Live Server** extension, then right-click `index.html` → *Open with Live Server*. It refreshes the page automatically every time you save.

To check the mobile layout, open your browser's developer tools (F12 or Cmd+Option+I) and toggle the device toolbar.

## Publishing online (free options)

### Option A: GitHub Pages (this site is already in a GitHub repo)
1. On GitHub, open your repository → **Settings** → **Pages**.
2. Under *Build and deployment*, choose **Deploy from a branch**.
3. Select your branch (usually `main`) and the `/ (root)` folder, then **Save**.
4. After a minute or two your site is live at `https://<your-username>.github.io/<repo-name>/`.
5. From then on, every change you push to that branch updates the site automatically.

### Option B: Netlify (drag and drop, no Git needed)
1. Create a free account at [netlify.com](https://www.netlify.com).
2. Go to *Sites* → drag this whole folder onto the upload area.
3. You get a live URL immediately. You can also connect your GitHub repo so it redeploys on each push.

### Option C: Vercel or Cloudflare Pages
Both are free for personal sites. Import the GitHub repository, leave the build command empty and the output directory as the root (`/`).

### Using your own domain (e.g. yourname.com)
Buy a domain from any registrar (Namecheap, Porkbun, Cloudflare, Squarespace, etc.),
then follow your host's "custom domain" guide (GitHub Pages: *Settings → Pages → Custom domain*; Netlify: *Domain management*).
All of these provide free HTTPS automatically.

## Before you launch: checklist
- [ ] Replaced every `Your Name` and placeholder paragraph
- [ ] Swapped all images in `images/` and updated `alt` text
- [ ] Updated each page's `<title>` and `<meta name="description">`
- [ ] Connected the contact form (Formspree ID) and updated your email
- [ ] Filled in social links and the résumé link on the About page (or removed them)
- [ ] Clicked through every page on your phone
