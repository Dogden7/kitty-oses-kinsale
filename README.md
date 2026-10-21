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

## Facebook demonstration

`facebook-demo.html` is a clearly labelled interactive walkthrough for the pub team. Page selection, the connected-by identity and the feed layout are simulated. It does not contact Facebook, collect credentials or import real posts.

The public website links directly to the pub's Facebook Page. Its 18+ login restriction prevented the basic public timeline embed from showing posts, so the empty iframe was removed. A real automatic feed still needs a Page-manager-authorised integration, with provider support for the Page's restrictions confirmed before launch.
