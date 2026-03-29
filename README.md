# Hometown Trip Checklists

Printable A4 checklists for hometown trip preparation.

## Files

- `last-week.html` — Tasks for the week before the trip (cleaning, washing, etc.)
- `last-day.html` — Tasks for the last day, 6 PM onwards (closing up, packing, etc.)
- `styles.css` — Shared styles (edit once, both pages update)

## How to View / Print

1. Double-click any `.html` file — opens in your browser
2. `Ctrl+P` (or `Cmd+P` on Mac) to print
3. Make sure **"Background graphics"** is checked in print settings (for colored headers)

## How to Edit

### Add or remove a checklist item

Open the HTML file and add/remove lines like:

```html
<div class="item">Your new task here</div>
```

### Add a new section

```html
<div class="section mysection">
  <div class="section-header"><span class="emoji">🔧</span><span class="label">SECTION NAME</span></div>
  <div class="section-body">
    <div class="item">Task 1</div>
    <div class="item">Task 2</div>
  </div>
</div>
```

Then add a color for it in `styles.css`:

```css
.mysection .section-header { background: #276EF1; }  .mysection { border-color: #276EF1; }
```

### Change styling

Edit `styles.css` — changes apply to both checklists.
