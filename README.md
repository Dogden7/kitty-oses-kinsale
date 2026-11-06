# Kitty Ó Sé’s — Kinsale

A responsive static website with food and music photographs, an accessible photo viewer, a clearly labelled demo menu, directions and contact details.

## Preview

Run `python3 -m http.server 8080 --directory dist`.

## Render hosting

Create a Render Static Site connected to this repository on branch `main`.

- Build command: `echo "Static website ready"`
- Publish directory: `dist`
- Automatic deployment: enabled

No dependencies, database or secrets are required. Confirm business details and photo permissions with the pub before commercial handover.

## Facebook feed preview

The homepage’s What’s on section shows three curated highlights from supplied Facebook screenshots. The cards are static. The Facebook link takes visitors to the Page for current updates. The separate `facebook-demo.html` URL redirects to this section.

The pub’s Facebook Page requires an 18+ login, which prevented its basic public timeline embed from displaying posts. A real automatic feed needs a Page-manager-authorised integration, with provider support for the Page’s restrictions confirmed before launch.

## Design reference

Design D (`design-d.html`) uses broad cues from the owner-supplied Killarney restaurant reference: a teal/light palette, serif lettering and a food-first emphasis. The HTML, CSS, composition and copy are independently authored for Kinsale. No Killarney source code, logo, photography, awards, menu items or other site assets are included. All photographs are the existing Kinsale site assets. The live homepage is unchanged; `designs.html` compares the four previews.
